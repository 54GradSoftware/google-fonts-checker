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
    this.page = await this.browser.newPage();
  }

  async close(){
    await this.browser.close();
  }

  async isReady(){
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve(!this.page.tracing._recording);
      },32);
    });
  }

  async traceUrl(url, retry = 2){
    return new Promise(async (resolve, reject) => {
      try{
        await this.page.goto('about:blank');
        await this.page.tracing.start({categories: ['devtools.timeline']});
        await this.page.goto(url);
        await Promise.any([
          this.page.mainFrame().waitForNavigation({waitUntil: 'networkidle0'}),
          new Promise(resolve => setTimeout(resolve,1000))
        ]);
        //let screenshot = await page.screenshot();
        let tracing = JSON.parse(await this.page.tracing.stop() || '{}')?.traceEvents?.filter(te => te.name === 'ResourceSendRequest');
        //await this.page.close({runBeforeUnload: false});
        resolve({
          requests: [...tracing].map(te => ({
            method: te?.args?.data.requestMethod,
            url: te?.args?.data.url
          })),
          //screenshot: screenshot.toString('base64url')
        });
      }catch (e) {
        console.log(`failed, restart puppeteer`);
        await this.close();
        await this.init();
        if (retry-- < 1){
          reject(e);
          return;
        }
        console.error(e);
        console.log('retry');
        resolve(this.traceUrl(url, retry));
      }
    });
  };
}