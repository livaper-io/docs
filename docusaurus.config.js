// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Livaper',
  tagline: 'Müşteri ve Randevu Takibinin En Kolay Yolu',
  url: 'https://docs.livaper.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Livaper',
  projectName: 'livaper-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/livaper-io/docs/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/livaper-io/docs/tree/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Livaper Logo',
          src: 'img/livaper_logo_gray.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Dokümantasyon',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://app.livaper.com/register',
            label: 'Ücretsiz Üye Ol',
            position: 'right',
          },
          {
            href: 'https://livaper.com/',
            label: 'Livaper',
            position: 'right',
          },
          {
            href: 'https://livaper.sleekplan.app/',
            label: 'Öneride Bulun',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
       /* links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ], */
        copyright: `Copyright © ${new Date().getFullYear()} Livaper for Bilpp`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
