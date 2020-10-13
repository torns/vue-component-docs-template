module.exports = {
  base: '/elementui-pro/',  // 部署到github相关的配置
  dest: './dist',
  title: 'elementui-pro',
  description: '基于elementui组件库封装的业务组件库',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'elementui-pro',
      description: '基于elementui组件库封装的业务组件库'
    }
  },
  head: [ // <head>标签 里的配置
    ['link', { rel: 'icon', href: 'favicon.ico' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  themeConfig: {
    // GitHub仓库
    repo: 'https://github.com/tanggd/elementui-pro',
    repoLabel: 'github',
    nav: [ // 导航栏配置
      // {text: '前端基础', link: '/accumulate/' },
      // {text: '算法题库', link: '/algorithm/'},
      // {text: 'github', link: 'https://github.com/tanggd/elementui-pro'}      
    ],
    sidebar: [
      {
        title: 'Basic',
        collapsable: false,
        children: [
          '/components/安装使用',
        ]
      },
      {
        title: 'Basic2',
        collapsable: false,
        children: [
          '/components/安装使用',
        ]
      }
    ]
  },
  markdown: { // markdown相关配置
    lineNumbers: true,  // 代码块是否显示行号
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
  },
}
