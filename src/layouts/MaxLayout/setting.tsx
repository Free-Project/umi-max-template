import type { ProSettings } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import React from 'react';
import { menus } from '../../../config/menus';

const routes =
  (menus || []).find((item: any) =>
    item?.component?.includes('/layouts/MaxLayout'),
  )?.routes || [];

export default {
  title: 'Umi Max App',
  route: {
    routes: routes,
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Ant Design',
      desc: '杭州市较知名的 UI 设计语言',
      url: 'https://ant.design',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      title: 'AntV',
      desc: '蚂蚁集团全新一代数据可视化解决方案',
      url: 'https://antv.vision/',
      target: '_blank',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: 'Pro Components',
      desc: '专业级 UI 组件库',
      url: 'https://procomponents.ant.design/',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'umi',
      desc: '插件化的企业级前端应用框架。',
      url: 'https://umijs.org/zh-CN/docs',
    },

    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
      title: 'qiankun',
      desc: '可能是你见过最完善的微前端解决方案🧐',
      url: 'https://qiankun.umijs.org/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: '语雀',
      desc: '知识创作与分享工具',
      url: 'https://www.yuque.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
      title: 'Kitchen ',
      desc: 'Sketch 工具集',
      url: 'https://kitchen.alipay.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: 'dumi',
      desc: '为组件开发场景而生的文档工具',
      url: 'https://d.umijs.org/zh-CN',
    },
  ],
  bgLayoutImgList: [
    {
      src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      left: 85,
      bottom: 100,
      height: '303px',
    },
    {
      src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      bottom: -68,
      right: -45,
      height: '303px',
    },
    {
      src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
      bottom: 0,
      left: 0,
      width: '331px',
    },
  ],
  menu: {
    collapsedShowGroupTitle: true,
  },
  menuItemRender: (menuItem: any, itemDom: React.ReactNode) => (
    <div
      className={'menu-item-content'}
      onClick={() => {
        if (menuItem?.isExternal) {
          window.open(menuItem?.href || '/', '_blank');
        } else {
          history.push(menuItem?.path || '/');
        }
      }}
    >
      {itemDom}
    </div>
  ),
  menuFooterRender: (menuFooterProps: any) => {
    if (menuFooterProps?.collapsed) {
      return undefined;
    }
    return (
      <>
        <p>©{new Date().getFullYear()} Umi Max App</p>
      </>
    );
  },

  // 默认设置
  navTheme: 'light', // 整体风格：light | dark | realDark
  colorPrimary: '#1677FF', // 主题色
  layout: 'mix', // 布局模式: side | top | mix
  siderMenuType: 'group', // 侧边菜单类型: group | sub
  contentWidth: 'Fluid', // 内容区域宽度: Fluid | Fixed
  fixedHeader: true, // 固定 Header
  fixSiderbar: true, // 固定 Siderbar
  splitMenus: true, // 拆分菜单，当 layout 为 mix 时有效
  // headerRender: undefined, // 头部渲染函数
  // menuRender: undefined, // 菜单渲染函数
  // menuHeaderRender: undefined, // 菜单头渲染函数
  // footerRender: undefined, // 页脚渲染函数
  // colorWeak: undefined, // 色弱模式
} as ProSettings;
