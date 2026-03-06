import React from 'react';
import {
  HomeOutlined,
  CheckSquareOutlined,
  FieldTimeOutlined,
  FormOutlined,
  ProductOutlined,
  UserOutlined
} from '@ant-design/icons';

export const menus = [
  {
    path: '/',
    component: '@/layouts/FrontLayout',
    routes: [
      {
        name: '首页',
        path: '/',
        component: '@/pages/Home',
        icon: <HomeOutlined />,
      },
      {
        name: '专利撰写',
        path: '/write',
        component: '@/pages/PatentWrite',
        icon: <FormOutlined />
      },
      {
        name: '任务管理',
        path: '/task',
        component: '@/pages/TaskManagement',
        icon: <FieldTimeOutlined />,
      },
      {
        name: '专家审核',
        path: '/review',
        component: '@/pages/PatentReview',
        icon: <CheckSquareOutlined />,
      },
      {
        name: '用户中心',
        path: '/userCenter',
        component: '@/pages/UserCenter',
        icon: <UserOutlined />,
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
