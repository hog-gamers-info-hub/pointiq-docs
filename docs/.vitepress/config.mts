import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PointIQ',
  description: 'Official PointIQ website and documentation.',
  lang: 'en-US',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpeg' }]
  ],

  themeConfig: {
    logo: '/favicon.jpeg',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Guide', link: '/guide/' },
      { text: 'FAQs', link: '/help/faq' },
      { text: 'Feedback', link: 'https://feedback.point-iq.com/' },
      { text: 'Contact', link: '/contact' },
      { text: 'Privacy Policy', link: '/privacy-policy/index.html', target: '_self' }
    ],

    sidebar: {
      '/guide/': [
        { text: 'User Guide', link: '/guide/' },
        { text: 'Create a Tournament', link: '/guide/create-tournament' },
        { text: 'Add Screenshots', link: '/guide/add-screenshots' },
        { text: 'Auto-calculate Results', link: '/guide/auto-calculate' },
        { text: 'Enter Results Manually', link: '/guide/manual-results' },
        { text: 'Review and Finalize', link: '/guide/review-finalize' },
        { text: 'View Standings', link: '/guide/standings' },
        { text: 'Export Results', link: '/guide/export-results' },
        { text: 'Use Templates', link: '/guide/templates' }
      ]
    },
    search: {
      provider: 'local'
    },

    footer: {
      message: 'Free Fire Max Point Calculator',
      copyright: '\u00A9 2026 PointIQ. All rights reserved.'
    }
  }
})

