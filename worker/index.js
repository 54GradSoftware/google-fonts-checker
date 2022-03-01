import redis from 'redis';
import {PuppeteerHandler} from './PuppeteerHandler.js';
import {trackerList} from "./trackerList.js";

const redisClient = redis.createClient({
  url: 'redis://redis:6379'
});

redisClient.on("error", (err) => {
  console.error("redis error", err)
});
redisClient.on("connect", () => {
  console.log("connect redis");
});

// wait for redis
redisClient.on("ready", () => {
  console.log("redis ready");
});
await redisClient.connect();


const tracer = new PuppeteerHandler();
await tracer.init();
console.log('started puppeteer');

const getTrackers = requests => {
  return [...trackerList].map(({name, match}) => ({
    name, matches: requests.filter(req => match(req.url))
  })).filter(req => !!req.matches.length);
}

const taskHandler = async () => {
  if (!await tracer.isReady()) return;
  const task = await redisClient.lPop(['site-queue']);
  if (!task?.url) return;
  let { requests } = await tracer.traceUrl(task.url);
  await redisClient.publish('site-done', {
    trackers: getTrackers(requests),
    allRequests: requests,
  });
}

setInterval(taskHandler, 500);
