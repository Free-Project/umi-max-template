import React from 'react';
// 引入带有Icon图标的menus
import { menus } from '../../../config/menus';
import Layout from '../MatrixLayout';

/**
 * FrontLayout
 * @description 前台布局（无侧边栏）
 */
const FrontLayout = () => {
  // 路由配置
  const frontRoute = menus.filter((r) => r.path === '/' && !r?.redirect)?.[0]?.routes || [];
  console.log('menus', menus);
  console.log('frontRoute', frontRoute)

  // 输出
  return <Layout layout="top" title="Patent" route={frontRoute} />;
};

export default FrontLayout;
