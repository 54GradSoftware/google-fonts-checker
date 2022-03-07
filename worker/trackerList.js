export const trackerList = [
  {
    name: 'Google Fonts',
    slug: 'google-fonts',
    url: 'https://fonts.google.com/',
    showDetails: true,
    match: url => url.match(/^https:\/\/fonts\.googleapis\.com/)||url.match(/^https:\/\/fonts\.gstatic\.com/)
  }
]