export const trackerList = [
  {
    name: 'Google Fonts',
    slug: 'google-fonts',
    url: 'https://fonts.google.com/',
    match: url => url.match(/fonts\.googleapis\.com/)
  },
  {
    name: 'Plausible.io',
    slug: 'plausible-io',
    match: url => url.match(/^https:\/\/plausible\.io\/js\/plausible\.js/)
  },
  {
    name: 'Google Adsense',
    slug: 'google-adsense',
    url: 'https://www.google.com/adsense/',
    match: url => url.match(/^https:\/\/adsense\.googleapis\.com/)
  },
  {
    name: 'Google Analytics',
    slug: 'google-analytics',
    url: 'https://google-analytics.com',
    match: url => url.match(/^https:\/\/google-analytics\.com/)
  },
]