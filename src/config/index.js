module.exports = {

  author: '@hyunuk',
  siteTitle: 'Hyunuk',
  siteShortTitle: '현욱', // Used as logo text in header, footer, and splash screen
  siteDescription: "Hyunuk's website for the portfolio.",
  siteUrl: 'https://hyunuk.github.io/',
  siteLanguage: 'en_US',
  siteIcon: 'src/config/icon-blue.png', // Relative to gatsby-config file

  splashScreen: false, // Set this to true if you want to use the splash screen

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40dev.hyunuk',
  shownArticles: 3,

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hyunuk/',
    },
    {
      name: 'Github',
      url: 'https://github.com/hyunuk',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@dev.hyunuk',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/@dev_hyunuk',
    },
    {
      name: 'Resume',
      url: '/Resume_Hyunuk_Lim.pdf',
    },
  ],

  navLinks: {
    menu: [
      {
        name: 'About Hyunuk',
        url: '/#about',
      },
      {
        name: 'Projects',
        url: '/#projects',
      },
      {
        name: 'Articles',
        url: '/#articles',
      },
    ],
    button: {
      name: 'Contact',
      url: '/#contact',
    },
  },

  footerLinks: [],
}
