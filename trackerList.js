export const trackerList = [
  {
    name: 'Google Fonts',
    match: url => url.match(/fonts.googleapis.com/)
  },
  {
    name: 'Plausible.io',
    match: url => url.match(/^https:\/\/plausible\.io\/js\/plausible\.js/)
  },
]