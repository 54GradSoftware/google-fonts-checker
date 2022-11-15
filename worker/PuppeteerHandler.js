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

  async traceUrl(url, retry = 1){
    return new Promise(async (resolve, reject) => {
      try{
        await this.page.goto('about:blank');
        await this.page.tracing.start({path: './tracing.json'});
        await this.page.goto(url, { waitUntil: 'networkidle0', timeout: 5000 });
        //let screenshot = await page.screenshot();
        const tracing = JSON.parse(await this.page.tracing.stop() || '{}');
        const requests = tracing.traceEvents?.filter(te => te.name === 'ResourceSendRequest');
        const styleSheets = tracing.traceEvents?.filter(te => te.name === 'ParseAuthorStyleSheet');
        const styleSheetsNotLoaded = styleSheets.filter(item => !requests.some(req => req?.args?.data.url === item?.args?.data.styleSheetUrl));
        //await this.page.close({runBeforeUnload: false});
        resolve({
          requests: [...requests].map(te => ({
            method: te?.args?.data.requestMethod,
            url: te?.args?.data.url,
          })),
          styleSheetsNotLoaded: [...styleSheetsNotLoaded].map(item => ({
            url: item?.args?.data.styleSheetUrl,
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