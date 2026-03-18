import React from 'react';
import {
  AppstoreOutlined,
  DashboardOutlined,
  ExperimentOutlined,
  ExportOutlined,
  HomeOutlined,
  SafetyOutlined,
} from '@ant-design/icons';

export const menus = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: '@/layouts/MaxLayout',
    routes: [
      {
        name: 'Home',
        path: '/home',
        component: './Home',
        icon: <HomeOutlined />,
      },
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: './Dashboard',
        icon: <DashboardOutlined />,
        routes: [
          {
            path: '/dashboard/table',
            name: 'Table',
            component: './Dashboard/Table',
          },
        ],
      },
      {
        path: '/admin',
        name: 'Admin',
        component: './Admin',
        icon: <AppstoreOutlined />,
        routes: [
          {
            path: '/admin/sub-page',
            name: 'Sub page',
            component: './Admin/SubPage',
          },
        ],
      },
      {
        name: 'Access',
        path: '/access',
        component: './Access',
        icon: <SafetyOutlined />,
      },
      {
        name: 'Test',
        path: '/test',
        component: './Test',
        icon: <ExperimentOutlined />,
      },
      {
        name: 'Link',
        path: '/href',
        href: 'https://umijs.org/',
        icon: <ExportOutlined />,
        isExternal: true,
      },
    ],
  },
];
