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
  {
    name: 'Google Maps',
    slug: 'google-maps',
    url: 'https://developers.google.com/maps/',
    showDetails: true,
    match: url =>
      url.match(/^https:\/\/www\.google\.com\/maps\/embed/)||
      url.match(/^https:\/\/www\.google\.com\/maps\/vt/)||
      url.match(/^https:\/\/maps\.googleapis\.com\/maps\/api/)||
      url.match(/^https:\/\/maps\.googleapis\.com\/maps-api-v3\/api/)||
      url.match(/^https:\/\/khms1\.googleapis\.com\/kh/)||
      url.match(/^https:\/\/maps\.gstatic\.com\/maps-api-v3\/embed/)||
      url.match(/^https:\/\/maps\.gstatic\.com\/mapfiles/)
  },
];
