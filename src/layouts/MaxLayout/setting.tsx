import { LogoutOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Dropdown } from 'antd';
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
      desc: 'A well-known UI design language from Hangzhou',
      url: 'https://ant.design',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      title: 'AntV',
      desc: "Ant Group's new generation data visualization solution",
      url: 'https://antv.vision/',
      target: '_blank',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: 'Pro Components',
      desc: 'Professional UI component library',
      url: 'https://procomponents.ant.design/',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'umi',
      desc: 'Plugin-based enterprise-level frontend application framework.',
      url: 'https://umijs.org/zh-CN/docs',
    },

    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
      title: 'qiankun',
      desc: "Perhaps the most complete micro-frontend solution you've ever seen 🧐",
      url: 'https://qiankun.umijs.org/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: 'Yuque',
      desc: 'Knowledge creation and sharing tool',
      url: 'https://www.yuque.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
      title: 'Kitchen ',
      desc: 'Sketch toolkit',
      url: 'https://kitchen.alipay.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: 'dumi',
      desc: 'Documentation tool designed for component development scenarios',
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
  avatarProps: {
    src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    size: 'small',
    title: 'HaQi',
    render: (_p: any, dom: React.ReactNode) => {
      return (
        <Dropdown
          menu={{
            items: [
              {
                key: 'logout',
                icon: <LogoutOutlined />,
                label: 'Logout',
              },
            ],
          }}
        >
          {dom}
        </Dropdown>
      );
    },
  },
  menuFooterRender: (menuFooterProps: any) => {
    if (menuFooterProps?.collapsed) {
      return undefined;
    }
    return <>©{new Date().getFullYear()} Umi Max App</>;
  },
  // Default settings
  navTheme: 'light', // Overall style：light | dark | realDark
  colorPrimary: '#1677FF', // Theme color
  layout: 'mix', // Layout mode: side | top | mix
  siderMenuType: 'group', // Sidebar menu type: group | sub
  contentWidth: 'Fluid', // Content area width: Fluid | Fixed
  fixedHeader: true, // Fixed Header
  fixSiderbar: true, // Fixed Sidebar
  splitMenus: true, // Split menus, effective when layout is mix
  // headerRender: undefined, // Header render function
  // menuRender: undefined, // Menu render function
  // menuHeaderRender: undefined, // Menu header render function
  // footerRender: undefined, // Footer render function
  // colorWeak: undefined, // Color weak mode
} as ProSettings;
