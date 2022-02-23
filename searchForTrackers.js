import puppeteer from 'puppeteer';
import {trackerList} from './trackerList.js';

const traceUrl = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.tracing.start({ categories: ['devtools.timeline'] });
  await page.goto(url);
  let screenshot = await page.screenshot();
  let tracing = JSON.parse(await page.tracing.stop()||'{}')?.traceEvents?.filter(te => te.name === 'ResourceSendRequest');
  await browser.close();
  return {
    requests: [...tracing].map(te => ({
      method: te?.args?.data.requestMethod,
      url: te?.args?.data.url
    })),
    screenshot
  }
}

const getTrackers = requests => {
  return [...trackerList].map(({name, match}) => ({
    name, matches: requests.filter(req => match(req.url))
  })).filter(req => !!req.matches.length);
}

export const searchForTrackers = async ({url}) => {
  let { requests, screenshot } = await traceUrl(url);

  return {
    trackers: getTrackers(requests),
    allRequests: requests,
    //screenshot: screenshot.toString('base64url')
  };
}