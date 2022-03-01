import express from 'express';
import validUrl from 'valid-url';
import redis from 'redis';

const redisClient = redis.createClient({
  url: 'redis://redis:6379'
});

redisClient.on("error", (err) => {
  console.error("redis error", err)
});
redisClient.on("connect", () => {
  console.log("connect redis");
});

redisClient.on("ready", () => {
  console.log("redis ready");
});
await redisClient.connect();


const app = express();
const router = express.Router();
const port = 3000;

router.use(express.json());
app.use('/api/v1', router);

//helpers
const validateUrl = url => validUrl.isUri(url);
const filterResult = (result, filter) => Object.fromEntries(
  Object.entries(result).filter( ([key]) => filter.find(e => e === key) )
);

router.post('/site', async (req, res) => {
  if (req.body?.url === undefined){
    res.status(400);
    res.send({status: 400, message: 'url is undefined'});
    return;
  }
  if (!validateUrl(req.body?.url)){
    res.status(400);
    res.send({status: 400, message: 'url is invalid'});
    return;
  }
  try{
    await redisClient.rPush('site-queue', [{url: req.body.url}]);
    //if (req.body?.filterResult?.length) result = filterResult(result, req.body.filterRequests);
    res.status(200);
    res.send({status: 200, url: req.body.url});
  }catch (e){
    console.error(e);
    res.status(500);
    res.send({status: 500, message: 'server error'});
  }
});

app.listen(port);
