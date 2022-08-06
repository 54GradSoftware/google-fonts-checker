import validUrl from 'valid-url';
import rs from 'redis';
import { Server as SocketIO } from 'socket.io';
import {logRedis} from '../helpers/logRedis.js';

const redis = rs.createClient({
  url: 'redis://redis:6379'
});
const redisSub = rs.createClient({
  url: 'redis://redis:6379'
});

logRedis(redis, 'redis');
logRedis(redisSub, 'redis');

await redis.connect();
await redisSub.connect();


//helpers
const validateUrl = url => validUrl.isWebUri(url);
const filterResult = (result, filter) => Object.fromEntries(
  Object.entries(result).filter( ([key]) => filter.find(e => e === key) )
);


const io = new SocketIO(3001);
io.on('connection', socket => {
  console.log(`socket: ${socket.id} - connected`);
  socket.on('site', async msg => {
    if (msg?.url === undefined){
      socket.emit('site', {status: 400, message: 'url is undefined'});
      return;
    }
    if (!validateUrl(msg?.url)){
      socket.emit('site', {status: 400, message: 'url is invalid'});
      return;
    }
    try{
      const taskId = `site:${socket.id}:${msg.id}`;
      console.log(`socket: ${socket.id} task: ${msg.id} - new task: ${msg.url} for ${msg.email}`);
      await redisSub.subscribe(taskId, response => {
        const res = JSON.parse(response);
        if (res?.status === 'failed') {
          redisSub.unsubscribe(taskId);
          socket.emit(`site:${msg.id}`, {status: 500, url: msg.url, message: 'failed'});
          console.log(`socket: ${socket.id} task: ${msg.id} - failed`);
          return;
        }
        if (res?.status === 'done') {
          redisSub.unsubscribe(taskId);
          const result = msg?.filterResult?.length ? filterResult(res.result, msg.filterResult) : res.result;
          socket.emit(`site:${msg.id}`, {status: 200, url: msg.url, result, message: 'done'});
          console.log(`socket: ${socket.id} task: ${msg.id} - done`);
          return;
        }
        if (res?.status === 'start'){
          socket.emit(`site:${msg.id}`, {status: 102, message: 'processing'});
          return;
        }
        console.log(`socket: ${socket.id} task: ${msg.id} - unknown res: ${res}`);
      });
      await redis.rPush('site-queue', [JSON.stringify({url: msg.url, socket: socket.id, id: msg.id})]);
      socket.emit(`site:${msg.id}`, {status: 102, message: 'queued'});
      console.log(`socket: ${socket.id} task: ${msg.id} - queued`);
    }catch (e) {
      console.error(e);
      socket.emit('site', {status: 500, message: 'server error'});
    }
  });
});
