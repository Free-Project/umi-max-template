import React from 'react';
import {
  FileDoneOutlined,
  HomeOutlined,
  ProductOutlined,
  TableOutlined
} from '@ant-design/icons';

export const menus = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: '@/layouts/FrontLayout',
    routes: [
      {
        name: '首页',
        path: '/home',
        component: './Home',
        icon: <HomeOutlined />,
      },
      {
        name: 'Table',
        path: '/table',
        component: './Table',
        icon: <TableOutlined />,
      },
      {
        name: '权限演示',
        path: '/access',
        component: './Access',
        icon: <FileDoneOutlined />,
        routes: [
          {
            name: '权限演示-子页面',
            path: '/access/child',
            component: './Access/Child',
          },
        ]
      },
    ],
  },
  {
    path: '/admin',
    // name: '后台管理',
    component: '@/layouts/AdminLayout',
    routes: [
      {
        path: '/admin',
        name: '后台管理',
        component: '@/pages/Admin',
        icon: <ProductOutlined />,
      },
    ],
  },
];
