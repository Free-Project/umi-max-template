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
      {
        name: '专利',
        path: '/patent',
        component: '@/pages/Patent',
        icon: <FileDoneOutlined />,
        routes: [
          {
            name: '专利撰写',
            path: '/patent/write',
            component: '@/pages/Patent/PatentWrite',
          },
          {
            name: '任务管理',
            path: '/patent/task',
            component: '@/pages/Patent/TaskManagement',
          },
          {
            name: '专家审核',
            path: '/patent/review',
            component: '@/pages/Patent/ExpertReview',
          },
          {
            name: '用户中心',
            path: '/patent/userCenter',
            component: '@/pages/Patent/UserCenter',
          },
        ],
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
