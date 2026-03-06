import { getUser } from '@/utils';
import { LogoutOutlined, QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Dropdown, Tooltip } from 'antd';
import React from 'react';
import { HeaderTitleLogo, LogoIcon } from './styled';

// 用户信息
const user = getUser();

// 导出配置
export const setting = {
  prefixCls: 'matrix',
  // 标题
  headerTitleRender: (_logo: any, title: any) => {
    return (
      <HeaderTitleLogo>
        <LogoIcon>App</LogoIcon>
        {title || <h3>UmiMax</h3>}
      </HeaderTitleLogo>
    );
  },
  // 头像
  avatarProps: {
    src: user?.avatarUrl || <UserOutlined />,
    title: user?.nickName || user?.name || '',
    size: 'small' as const,
    render: (_avatarProps: any, avatarDom: React.ReactNode) => {
      return (
        <Dropdown
          menu={{
            items: [
              {
                key: 'user',
                label: <a><UserOutlined /> 个人中心</a>,
              },
              {
                key: 'logout',
                label: <a><LogoutOutlined /> 退出</a>,
              },
            ],
          }}
          placement="bottomLeft"
        >
          {avatarDom}
        </Dropdown>
      );
    },
  },
  // 操作项
  actionsRender: () => {
    const actionOpen = () => {
      window.open('/', '_blank');
    };
    return [
      <Tooltip title={'产品说明文档'} key="helpDoc">
        <QuestionCircleOutlined onClick={actionOpen} />
      </Tooltip>,
    ];
  },
  menuItemRender: (menuItem: any, itemDom: React.ReactNode) => (
    <div
      className={'menu-item-content'}
      onClick={() => {
        history.push(menuItem?.path || '/');
      }}
    >
      {itemDom}
    </div>
  ),
  // 背景图
  bgLayoutImgList: [
    {
      // 全屏bg
      src: 'https://mdn.alipayobjects.com/huamei_pwl8tk/afts/img/56MoSrYOyxwAAAAAAAAAAAAADphNAQFr/original',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    {
      src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      left: 85,
      bottom: 100,
      height: '303px',
    },
    {
      src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
      bottom: -68,
      right: -45,
      height: '303px',
    },
    {
      src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
      bottom: 0,
      left: 0,
      width: '331px',
    },
  ],
};
