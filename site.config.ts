import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e0294d8963174fbfa3f1e6acaf2e2ebf',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'my blog',
  domain: 'my-blog-lemon-psi.vercel.app',
  author: 'Kevin Chao',

  // open graph metadata (optional)
  description: 'Personal Blog From Notion',

  // social usernames (optional)
  twitter: null,
  github: 'kk3418',
  linkedin: '/%E9%80%A2%E7%92%BD-%E8%B6%99-8a0980178',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://static.wikia.nocookie.net/pokemon/images/f/f1/UltraBallArt.png/revision/latest?cb=20101106022319',
  defaultPageCover: '/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/': 'e0294d8963174fbfa3f1e6acaf2e2ebf',
    '/about': '8e8937079dc248b0bf55910f64b78fa0',
    '/project': 'ac84f614974e4056aa37df302907d44b',
    '/contact': 'bb2ea3f3679749c8a5e59b336f3108f0'
  },

  pageUrlAdditions: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '8e8937079dc248b0bf55910f64b78fa0'
    },
    {
      title: 'Project',
      pageId: 'ac84f614974e4056aa37df302907d44b'
    },
    {
      title: 'Contact',
      pageId: 'bb2ea3f3679749c8a5e59b336f3108f0'
    }
  ]
})
