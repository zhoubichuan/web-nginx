module.exports = {
  // 基础配置
  base: '/web-nginx/', // 部署站点的基础路径
  description: 'Nginx学习笔记',
  locales: {
    // 默认标题
    '/': {
      title: 'Nginx学习笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: 'Nginx基础知识',
          items: [{
            text: '1.Nginx基础',
            link: '/base/build/1.index'
          }
          ]
        },
        {
          text: 'Nginx高级知识',
          items: [{
            text: '1.Nginx精讲',
            link: '/senior/use/1.index'
          },
          ]
        }
        ],
        sidebar: {
          '/base/build/': [
            '1.index',
            '2.service',
            '3.cdn',
            '4.cors',
            '5.cache',
            '7.module',
            '8.project',
            '9.utils',
            '10.ui',
            '11.data',
            '12.skill',
            '13.com',
            '14.data',
            '15.api'
          ],
          '/senior/use/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
        }
      }
    }
  },
}