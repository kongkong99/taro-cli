export default {
  pages: [
    'views/home/index',
    'views/logs/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#6495ED',
    list: [
      {
        pagePath: 'views/home/index',
        text: '首页',
        'iconPath': 'assets/image/taro-logo.png',
        'selectedIconPath': 'assets/image/react-logo.png'
      },
      {
        pagePath: 'views/logs/index',
        text: '日志',
        'iconPath': 'assets/image/taro-logo.png',
        'selectedIconPath': 'assets/image/react-logo.png'
      },
    ],

  }
};
