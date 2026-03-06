import { getUser } from '@/utils';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Tooltip } from 'antd';
import React from 'react';
import { HeaderTitleLogo } from './styled';

// 用户信息
const user = getUser();

// 导出配置
export const setting = {
  prefixCls: 'matrix',
  // 标题
  headerTitleRender: (_logo: any, title: any) => {
    return (
      <HeaderTitleLogo>
        <img src="https://mdn.alipayobjects.com/huamei_ez1ofb/afts/img/A*Mmi_TLH8fesAAAAAQDAAAAgAevicAQ/original" />
        {title || <h3>Patent</h3>}
      </HeaderTitleLogo>
    );
  },
  // 头像
  avatarProps: {
    src:
      user?.avatarUrl ||
      'https://work.antgroup-inc.cn/photo/default.140x140.jpg',
    title: user?.nickName || user?.name || '',
    size: 'small' as const,
    render: (_avatarProps: any, avatarDom: React.ReactNode) => {
      return avatarDom;
    },
  },
  // 操作项
  actionsRender: () => {
    const actionOpen = () => {
      window.open('https://taobao.com', '_blank');
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
