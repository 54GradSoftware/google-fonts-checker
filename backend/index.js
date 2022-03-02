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
const validateUrl = url => validUrl.isUri(url);
const filterResult = (result, filter) => Object.fromEntries(
  Object.entries(result).filter( ([key]) => filter.find(e => e === key) )
);


const io = new SocketIO(3001);
io.on('connection', socket => {
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
      await redisSub.subscribe(`site:${socket.id}`, result => {
        result = JSON.parse(result);
        if (msg?.filterResult?.length) result = filterResult(result, msg.filterResult);
        socket.emit(`site:${msg.id}`, {status: 200, url: msg.url, result});
      });
      await redis.rPush('site-queue', [JSON.stringify({url: msg.url, socket: socket.id})]);
    }catch (e) {
      console.error(e);
      socket.emit('site', {status: 500, message: 'server error'});
    }
  });
});
