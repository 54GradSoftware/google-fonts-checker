export const trackerList = [
  {
    name: 'Google Fonts',
    slug: 'google-fonts',
    url: 'https://fonts.google.com/',
    showDetails: true,
    match: url => url.match(/^https:\/\/fonts\.googleapis\.com/)||url.match(/^https:\/\/fonts\.gstatic\.com/)
  },
  {
    name: 'Google reCAPTCHA',
    slug: 'google-recaptcha',
    url: 'https://developers.google.com/recaptcha/',
    showDetails: true,
    match: url => url.match(/^https:\/\/www\.google\.com\/recaptcha\/api\.js/)||url.match(/^https:\/\/www\.gstatic\.com\/recaptcha\/releases/)
  },
]
