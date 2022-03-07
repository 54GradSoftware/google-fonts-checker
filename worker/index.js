import rs, {commandOptions} from 'redis';
import {PuppeteerHandler} from './PuppeteerHandler.js';
import {trackerList} from './trackerList.js';
import {logRedis} from '../helpers/logRedis.js';

const redis = rs.createClient({
  url: 'redis://redis:6379'
});
logRedis(redis)
await redis.connect();


const tracer = new PuppeteerHandler();
await tracer.init();
console.log('started puppeteer');

const getTrackers = requests => {
  return [...trackerList].map(({name, match, ...props}) => ({
    ...props, name, matches: requests.filter(req => match(req.url))
  })).filter(req => !!req.matches.length);
}

const execTask = async task => {
  if (!task?.url) return;
  const { requests } = await tracer.traceUrl(task.url);
  return {
    trackers: getTrackers(requests),
    allRequests: requests
  };
}

while (true){
  try{
    if (!(await tracer.isReady())) continue;
    const { element } = await redis.blPop(commandOptions({ isolated: true }), 'site-queue', 0);
    const task = JSON.parse(element);
    console.log(`socket: ${task.socket} task: ${task.id} - received task: ${task.url}`);
    await execTask(task).then(async result => {
      await redis.publish(`site:${task.socket}:${task.id}`, JSON.stringify({ status: 'done', result}));
      console.log(`socket: ${task.socket} task: ${task.id} - done`);
    }).catch(async e => {
      await redis.publish(`site:${task.socket}:${task.id}`, '{"status":"failed"}');
      console.log(`socket: ${task.socket} task: ${task.id} - failed`);
      console.error(e);
    });
  }catch (e) {
    console.error(e);
  }
}
