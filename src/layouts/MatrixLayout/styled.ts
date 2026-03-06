import styled from 'styled-components';

export const HeaderTitleLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: inherit !important;
  & > img {
    height: 24px !important;
  }
  & > h1,
  & > h3,
  & > h4 {
    margin-bottom: 0;
    padding-left: 8px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1677ff 0%, #0958d9 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
`;

export const MatrixLayoutWrapper = styled.div`
  height: 100vh;
  overflow: auto;

  // 背景颜色
  .matrix-layout-bg-list {
    background: rgba(255, 255, 255, 0.3) !important;
  }

  // 顶部
  .matrix-layout-header {
    .matrix-top-nav-header.matrix-top-nav-header-light {
      .matrix-top-nav-header-menu {
        .matrix-base-menu-horizontal {
          .matrix-base-menu-horizontal-menu-item {
            border-radius: 8px;
            &:not(:last-child) {
              margin-inline-end: 8px;
            }
            &.ant-menu-item-active:active {
              background-color: rgba(0, 0, 0, 0.05);
              color: #1677ff;
            }
            &.ant-menu-item-selected {
              background-color: rgba(22, 119, 255, 0.08);
              color: #1677ff;
            }
          }
        }
      }
      .ant-pro-global-header-right-content {
        .ant-pro-global-header-header-actions-avatar {
          .ant-avatar {
            color: rgba(0, 0, 0, 0.45);
          }
        }
      }
    }
  }

  // 侧边栏菜单
  .matrix-sider {
    .ant-layout-sider-children {
      padding-inline: 12px;
      padding-top: 4px;
    }
    .matrix-sider-menu {
      .matrix-base-menu-inline-menu-item.ant-menu-item-active:active {
        background-color: rgba(0, 0, 0, 0.05);
        color: #1677ff;
      }
    }
    .matrix-base-menu-inline-menu-item.ant-menu-item-selected {
      background-color: rgba(22, 119, 255, 0.08);
      color: #1677ff;
    }
    .matrix-sider-footer {
      animation-name: none;
    }
  }

  // 主内容
  .matrix-layout-container {
    .matrix-layout-header {
      background-color: rgba(255, 255, 255, 0.3);
    }
    .matrix-layout-content {
      padding-block: 16px 24px;
      padding-inline: 24px;

      .ant-pro-page-container-warp-page-header {
        padding-block-start: 16px;
        padding-block-end: 0;
        padding-inline: 24px;

        .ant-page-header-heading {
          margin-block-start: 0;
          padding-block-start: 0;
          .ant-page-header-heading-left {
            margin-block: 0;
            .ant-page-header-heading-title {
              display: inline-flex;
              align-items: center;
            }
          }
        }
      }

      .ant-page-header-has-breadcrumb {
        .ant-page-header-breadcrumb {
          padding-block: 8px;
        }
      }
      .ant-pro-page-container-children-container {
        padding-inline: 24px; // padding-left && padding-right
        padding-block-start: 12px; // padding-top
        padding-block-end: 24px; // padding-bottom
      }
    }

    .matrix-layout-content-has-page-container {
      padding-block: 0;
      padding-inline: 0;
    }
  }
`;

export const MenuFooter = styled.div`
  text-align: center;
  padding-block-start: 12;
`;
