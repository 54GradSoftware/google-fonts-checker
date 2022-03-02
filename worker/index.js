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
  return [...trackerList].map(({name, match}) => ({
    name, matches: requests.filter(req => match(req.url))
  })).filter(req => !!req.matches.length);
}

const execTask = async task => {
  if (!task?.url) return;
  const { requests } = await tracer.traceUrl(task.url);
  const trackers = getTrackers(requests);
  await redis.publish(`site:${task.socket}`, JSON.stringify({
    trackers, allRequests: requests,
  }));
}

while (true){
  const { element } = await redis.blPop(commandOptions({ isolated: true }), 'site-queue', 0);
  const task = JSON.parse(element);
  await execTask(task);
}
