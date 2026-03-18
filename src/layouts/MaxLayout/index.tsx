import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import {
  CaretDownFilled,
  GithubFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import { Outlet, useLocation } from '@umijs/max';
import { ConfigProvider, Divider, Dropdown, Input, Popover, theme } from 'antd';
import styles from './index.less';
import setting from './setting';

/**
 * MaxLayout 是一个基于 ProLayout 的布局组件，提供了更多的定制化选项和功能，适用于需要高度定制化的应用场景。
 */
export default () => {
  const location = useLocation();
  const { token } = theme.useToken();

  return (
    <div id="max-pro-layout">
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() =>
            document.getElementById('max-pro-layout') || document.body
          }
        >
          <ProLayout
            {...setting}
            prefixCls="max-layout"
            // location={{
            //   pathname: useLocation().pathname,
            // }}
            location={location}
            selectedKeys={[location.pathname]}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            headerTitleRender={(logo, title, cfg) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (
                typeof window === 'undefined' ||
                document.body.clientWidth < 1400 ||
                cfg.isMobile
              ) {
                return defaultDom;
              }
              return (
                <>
                  {defaultDom}
                  <Divider type="vertical" />
                  <Popover
                    placement="bottom"
                    content={
                      <div className={styles['layout-menu-card-popover']}>
                        <div
                          style={{
                            width: 300,
                          }}
                        >
                          <div>热门产品</div>
                          {new Array(3).fill(1).map((name, index) => {
                            return (
                              <div
                                key={index}
                                style={{ display: 'flex', marginTop: 12 }}
                              >
                                <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
                                <div
                                  style={{
                                    marginInlineStart: 14,
                                  }}
                                >
                                  <div>Ant Design</div>
                                  <div>杭州市较知名的 UI 设计语言</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    }
                  >
                    <div
                      className={styles['layout-menu-card-title']}
                      style={{
                        color: token.colorTextHeading,
                      }}
                    >
                      <span> 企业级资产中心</span>
                      <CaretDownFilled />
                    </div>
                  </Popover>
                </>
              );
            }}
            onMenuHeaderClick={(e) => {
              console.log(e);
            }}
            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: '哈七',
              render: (_prs, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: '退出登录',
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            actionsRender={(actionProps) => {
              if (actionProps.isMobile || typeof window === 'undefined') {
                return [];
              }
              return [
                actionProps.layout !== 'side' &&
                document.body.clientWidth > 1400 ? (
                  <div
                    key="SearchOutlined"
                    aria-hidden
                    className={styles['layout-header-search']}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    <Input
                      style={{
                        backgroundColor: token.colorBgTextHover,
                      }}
                      prefix={
                        <SearchOutlined
                          style={{
                            color: token.colorTextLightSolid,
                          }}
                        />
                      }
                      placeholder="搜索方案"
                      variant="borderless"
                    />
                  </div>
                ) : undefined,
                <QuestionCircleFilled key="QuestionCircleFilled" />,
                <PlusCircleFilled
                  style={{
                    color: token.colorPrimary,
                    fontSize: 24,
                  }}
                />,
                <GithubFilled key="GithubFilled" />,
              ];
            }}
          >
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};
