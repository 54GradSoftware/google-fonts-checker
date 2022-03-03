import puppeteer from 'puppeteer';

export class PuppeteerHandler{
  constructor() {
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-sandbox",
      ]
    });
  }

  async close(){
    await this.browser.close();
  }

  async isReady(){
    return (await this.browser.pages())?.length === 1;
  }

  async traceUrl(url, retry = 2){
    return new Promise(async (resolve, reject) => {
      try{
        const page = await this.browser.newPage();
        await page.tracing.start({categories: ['devtools.timeline']});
        await page.goto(url);
        //let screenshot = await page.screenshot();
        let tracing = JSON.parse(await page.tracing.stop() || '{}')?.traceEvents?.filter(te => te.name === 'ResourceSendRequest');
        await page.close();
        resolve({
          requests: [...tracing].map(te => ({
            method: te?.args?.data.requestMethod,
            url: te?.args?.data.url
          })),
          //screenshot: screenshot.toString('base64url')
        });
      }catch (e) {
        if (retry-- < 1){
          reject(e);
          return;
        }
        console.log(`failed, retry in 500ms`)
        setTimeout(() => {
          resolve(this.traceUrl(url, retry))
        }, 500);
      }
    });
  };
}