import React from 'react';
// 引入带有Icon图标的menus
import { menus } from '../../../config/menus';
import Layout from '../MatrixLayout';

/**
 * AdminLayout
 * @description 后台布局
 */
const AdminLayout = () => {
  // 路由配置，只显示admin路由
  const adminRoute = menus.filter((r) => r.path === '/admin');

  // 输出
  return (
    <Layout
      layout="mix"
      title="Patent - Admin"
      route={adminRoute}
      siderWidth={208}
    />
  );
};

export default AdminLayout;
