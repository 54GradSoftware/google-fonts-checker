export const logRedis = (client, prefix = '') => {
  client.on("error", (err) => {
    console.error(prefix+"redis error", err)
  });
  client.on("connect", () => {
    console.log(prefix+"connect redis");
  });
  client.on("ready", () => {
    console.log(prefix+"redis ready");
  });
}