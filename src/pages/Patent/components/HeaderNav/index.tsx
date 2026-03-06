import {
  CheckSquareOutlined,
  FieldTimeOutlined,
  FormOutlined,
  GlobalOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { history } from 'umi';
import styles from './index.less';

/*
 * 顶部导航栏
 */
export default ({ activePath = '/patent' }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>PL</div>
          <span className={styles.logoText}>PatLeap</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <a
          className={`${styles.navItem}${
            activePath === '/patent' ? ` ${styles.navItemActive}` : ''
          }`}
          onClick={() => history.push('/patent')}
        >
          <GlobalOutlined />
          <span>首页</span>
        </a>
        <a
          className={`${styles.navItem}${
            activePath === '/patent/write' ? ` ${styles.navItemActive}` : ''
          }`}
          onClick={() => history.push('/patent/write')}
        >
          <FormOutlined />
          <span>专利撰写</span>
        </a>
        <a
          className={`${styles.navItem}${
            activePath === '/patent/task' ? ` ${styles.navItemActive}` : ''
          }`}
          onClick={() => history.push('/patent/task')}
        >
          <FieldTimeOutlined />
          <span>任务管理</span>
        </a>
        <a
          className={`${styles.navItem}${
            activePath === '/patent/review'
              ? ` ${styles.navItemActive}`
              : ''
          }`}
          onClick={() => history.push('/patent/review')}
        >
          <CheckSquareOutlined />
          <span>专家审核</span>
        </a>
      </nav>
      <div className={styles.headerRight}>
        <span className={styles.userName}>
          <UserOutlined />
          张三
        </span>
        <span className={styles.logout}>
          <LogoutOutlined />
          退出
        </span>
      </div>
    </header>
  );
};
