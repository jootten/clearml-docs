/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */


const path = require('path');


module.exports = {
  title: 'ClearML',
  tagline: 'Auto-Magical Suite of tools to streamline your ML workflow',
  url: 'https://clear.ml',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'allegro.ai', // Usually your GitHub org/user name.
  projectName: 'ClearML', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    zoomSelector: '.markdown :not(em) > img',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '\u{1F319}',
        lightIcon: '\u{1F315}',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    announcementBar: {
      id: 'supportus',
      content: 'If you ❤️ ️<b>ClearML</b>, ⭐️ us on <a target="_blank" rel="noopener noreferrer" href="https://github.com/allegroai/clearml">GitHub</a>!',
      isCloseable: true,
    },
    navbar: {
      style: 'dark',
      hideOnScroll: true,
      title: ' ',
      logo: {
        alt: 'ClearML',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'tutorials', label: 'Tutorials', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {to: '/docs/guides', label: 'Examples', position: 'left'},
        //{to: '/docs/references', label: 'API', position: 'left'},
        {
          label: 'References',
          position: 'left', // or 'right'
          items: [
            {
              label: 'SDK',
              to: '/docs/references/sdk/task',
            },
            {
              label: 'Server API',
              to: '/docs/references/api/endpoints',
            },
            {
              label: 'Agent Reference',
              to: '/docs/references/clearml_agent_ref',
            },
          ],
        },
        {
          label: 'Resources',
          position: 'left', // or 'right'
          items: [
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'Release Notes',
              to: '/docs/release_notes/ver_0_17',
            },
            {
              label: 'Community Resources',
              to: '/docs/community',
            },
          ],
        },
        {
          href: 'https://clearml.slack.com',
          position: 'right',
          className: 'header-ico header-ico--slack',
          'aria-label': 'Slack Channel',
        },
        {
          href: 'https://youtube.com/clearml',
          position: 'right',
          className: 'header-ico header-ico--youtube',
          'aria-label': 'YouTube',
        },
        {
          href: 'https://twitter.com/clearmlapp',
          position: 'right',
          className: 'header-ico header-ico--twitter',
          'aria-label': 'Twitter',
        },
        {
          href: 'https://github.com/allegroai/clearml',
          position: 'right',
          className: 'header-ico header-ico--github',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/allegroai-trains/shared_invite/zt-c0t13pty-aVUZZW1TSSSg2vyIGVPBhg',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/c/ClearML',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/clearmlapp',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/clearml',
            },
            // {
            //   html: `
            //       <a href="https://twitter.com/clearmlapp" target="_blank" rel="noreferrer noopener" aria-label="Twitter">
            //         <img src="img/twitter_logo_blue.svg" alt="Twitter" />
            //       </a>
            //     `,
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://clear.ml/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/allegroai/clearml',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} allegro.ai. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/allegroai/clearml_docs/edit/master/website/',
        },
        API: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/allegroai/clearml_docs/edit/master/website/',
        },
        blog: {
          blogTitle: 'ClearML Tutorials',
          blogDescription: 'ClearML tutorials and documentation',
          path: 'tutorials',
          routeBasePath: 'tutorials',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/allegroai/clearml_docs/edit/master/website/tutorials/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsDir: ["docs"],
        docsRouteBasePath: ["/docs"],
        // blogDir: ["tutorials"],
        // blogRouteBasePath: ["/tutorials"],
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
    path.resolve(__dirname, 'src/zoom-plugin')
  ],
};