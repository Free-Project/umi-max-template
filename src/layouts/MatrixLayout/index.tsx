import { Outlet, useLocation, useModel } from '@umijs/max';
import {
  /* PageContainer,*/
  ProConfigProvider,
  ProLayout,
} from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import React, { useMemo } from 'react';
// 引入带有Icon图标的menus
import { menus } from '../../../config/menus';
import { setting } from './setting';
import { MatrixLayoutWrapper, MenuFooter } from './styled';

interface LayoutProps {
  [key: string]: any;
}

/**
 * MatrixLayout
 * @description 综合布局
 */
const MatrixLayout: React.FC<LayoutProps> = (props) => {
  const { layout, route: propsRoute, siderWidth, title } = props;
  const { setMenuCollapsed } = useModel('global');

  const layoutSetting = useMemo(() => {
    const settingResult: any = {
      ...setting,
      title,
    };
    if (layout !== 'top') {
      settingResult.siderWidth = siderWidth || 208;
      settingResult.fixSiderbar = true;
      settingResult.menuFooterRender = (menuFooterProps: any) => {
        if (menuFooterProps?.collapsed) {
          return undefined;
        }
        return (
          <MenuFooter>
            <p>©{new Date().getFullYear()} Patent</p>
          </MenuFooter>
        );
      };
    }
    return settingResult;
  }, [layout, title, siderWidth]);

  // 输出
  return (
    <MatrixLayoutWrapper id="matrix-pro-layout">
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() =>
            document.getElementById('matrix-pro-layout') || document.body
          }
        >
          <ProLayout
            layout={layout || 'mix'}
            fixedHeader={true}
            splitMenus={layout !== 'top'}
            onCollapse={setMenuCollapsed}
            {...layoutSetting}
            route={{ routes: propsRoute || menus }}
            location={{
              pathname: useLocation().pathname,
            }}
          >
            {/* <PageContainer> */}
            <Outlet />
            {/* </PageContainer> */}
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </MatrixLayoutWrapper>
  );
};

export default MatrixLayout;
