import React from 'react';
import { Outlet, useLocation } from '@umijs/max';
import { ConfigProvider, Divider, Input, Popover, theme  } from 'antd';
import { CaretDownFilled, GithubFilled, PlusCircleFilled, QuestionCircleFilled, SearchOutlined } from '@ant-design/icons';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components';
import setting from './setting';
import styles from './index.less';

/**
 * MaxLayout is a layout component based on ProLayout that provides more customization options and features, suitable for application scenarios that require high customization.
 */
export default () => {
  const location = useLocation();
  const { token } = theme.useToken();

  const headerTitleRender = (logo: any, title: any, cfg: any) => {
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
                <div>Popular Products</div>
                {new Array(3).fill(1).map((name, index) => {
                  return (
                    <div key={index} style={{ display: 'flex', marginTop: 12 }}>
                      <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
                      <div
                        style={{
                          marginInlineStart: 14,
                        }}
                      >
                        <div>Ant Design</div>
                        <div>A well-known UI design language from Hangzhou</div>
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
            <span>Asset Center</span>
            <CaretDownFilled />
          </div>
        </Popover>
      </>
    );
  };

  const actionsRender = (actionProps: any) => {
    if (actionProps.isMobile || typeof window === 'undefined') {
      return [];
    }
    return [
      actionProps.layout !== 'side' && document.body.clientWidth > 1400 ? (
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
            placeholder="Search solutions"
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
  };

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
            location={location}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            headerTitleRender={headerTitleRender}
            actionsRender={actionsRender}
            onMenuHeaderClick={(e) => {
              console.log(e);
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
