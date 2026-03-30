import React from 'react';
import {
  AppstoreOutlined,
  DashboardOutlined,
  ExperimentOutlined,
  ExportOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  ProfileOutlined,
  SafetyOutlined,
  TableOutlined
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
        // component: './Dashboard',
        icon: <DashboardOutlined />,
        routes: [
          
          {
            name: 'Sub page1',
            path: '/dashboard/sub-page1',
            component: './Dashboard/SubPage1',
            icon: <FundProjectionScreenOutlined />
          },
          {
            name: 'Sub page2',
            path: '/dashboard/sub-page2',
            component: './Dashboard/SubPage2',
            icon: <ProfileOutlined />
          },
        ],
      },
      {
        name: 'Admin',
        path: '/admin',
        // component: './Admin',
        icon: <AppstoreOutlined />,
        routes: [
          {
            path: '/admin/table',
            name: 'Table',
            component: './Admin/Table',
            icon: <TableOutlined />
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
