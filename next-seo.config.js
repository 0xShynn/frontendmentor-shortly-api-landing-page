// More info on https://github.com/garmeeh/next-seo#readme

// Edit the canonical url
const canonicalUrl = ''

// Edit the default title
const defaultTitle = 'Shortly'
const defaultDescription =
  'Build your brand’s recognition and get detailed insights on how your links are performing.'

// Edit the SEO parameters
export const SEO = {
  defaultTitle: defaultTitle,
  titleTemplate: `${defaultTitle} | %s`,
  canonical: canonicalUrl,
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'favicons/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      href: 'favicons/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      href: 'favicons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: 'favicons/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: 'favicons/safari-pinned-tab.svg',
      // Edit the touch bar background color
      color: '#232127',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      // Edit the tile color (windows)
      content: '#232127',
    },
    {
      name: 'theme-color',
      // Edit the full background color (android)
      content: '#232127',
    },
  ],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
    locale: 'en_IE',
    url: canonicalUrl,
    images: [
      {
        url: 'https://www.dropbox.com/s/3zvp71cwx4nm2st/shortly-ogimage.jpg?raw=1',
        width: 1200,
        height: 630,
        alt: 'Preview of the website',
      },
    ],
  },
  twitter: {
    handle: '@anhek_',
    cardType: 'summary_large_image',
  },
}

export default SEO
