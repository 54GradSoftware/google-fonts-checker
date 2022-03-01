import puppeteer from 'puppeteer';

export class PuppeteerHandler{
  constructor() {
    this.maxTasks = 8;
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

  async isReady(){
    return (await this.browser.pages())?.length < this.maxTasks;
  }

  async traceUrl(url) {
    const page = await this.browser.newPage();
    await page.tracing.start({categories: ['devtools.timeline']});
    await page.goto(url);
    //let screenshot = await page.screenshot();
    let tracing = JSON.parse(await page.tracing.stop() || '{}')?.traceEvents?.filter(te => te.name === 'ResourceSendRequest');
    await page.close();
    return {
      requests: [...tracing].map(te => ({
        method: te?.args?.data.requestMethod,
        url: te?.args?.data.url
      })),
      //screenshot
    }
  };
}