export default [
  { UserAgent: '*' },
  { Disallow: '/this-route-is-for-developer-testing' },
  { BlankLine: true },
  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
]
