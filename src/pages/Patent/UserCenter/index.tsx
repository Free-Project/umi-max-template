import React from 'react';
import {
  Layout,
  Card,
  Typography,
  Row,
  Col,
  Avatar,
  Button,
  Badge,
  Divider,
} from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  EditOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import styles from './index.less';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const menuItems = [
  { key: 'home', icon: <HomeOutlined />, label: '首页' },
  { key: 'patent', icon: <FileTextOutlined />, label: '专利撰写' },
  { key: 'task', icon: <AuditOutlined />, label: '任务管理' },
  { key: 'expert-review', icon: <CheckCircleOutlined />, label: '专家审核' },
];

const statsData = [
  {
    label: '已完成撰写',
    subLabel: '专利文档数量',
    value: 12,
    color: '#1677FF',
  },
  {
    label: '审核通过',
    subLabel: '专家审核通过数',
    value: 8,
    color: '#52C41A',
  },
  {
    label: '进行中',
    subLabel: '正在撰写的任务',
    value: 4,
    color: '#FA8C16',
  },
];

const recentActivities = [
  {
    id: 1,
    title: 'AI文档撰写（专利申请文件）',
    date: '2024/11/20',
    status: 'completed',
    statusText: '已完成',
  },
  {
    id: 2,
    title: '专家审核服务',
    date: '2024/11/22',
    status: 'completed',
    statusText: '已完成',
  },
  {
    id: 3,
    title: '技术交底书撰写',
    date: '2024/11/18',
    status: 'completed',
    statusText: '已完成',
  },
];

const HeaderComponent = () => (
  <Header className={styles.header}>
    <div className={styles.headerLeft}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <span>PL</span>
        </div>
        <Text strong className={styles.logoText}>
          PatLeap
        </Text>
      </div>
      <div className={styles.navMenu}>
        {menuItems.map((item) => (
          <div key={item.key} className={styles.navItem}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.headerRight}>
      <div className={`${styles.userInfo} ${styles.userInfoActive}`}>
        <UserOutlined />
        <span>张三</span>
      </div>
      <div className={styles.logout}>
        <LogoutOutlined />
        <span>退出</span>
      </div>
    </div>
  </Header>
);

const UserInfoCard = () => (
  <Card className={styles.userInfoCard}>
    <div className={styles.userProfile}>
      <Avatar
        size={80}
        icon={<UserOutlined />}
        className={styles.userAvatar}
      />
      <div className={styles.userDetails}>
        <Text strong className={styles.userName}>张三</Text>
        <Text className={styles.userContact}>zhangsan@example.com</Text>
        <Text className={styles.userContact}>138****8888</Text>
      </div>
    </div>
    <Button
      icon={<EditOutlined />}
      className={styles.editBtn}
      block
    >
      编辑资料
    </Button>
  </Card>
);

const StatsCard = () => (
  <Card className={styles.statsCard}>
    <div className={styles.statsHeader}>
      <div className={styles.statsIcon}>
        <FileDoneOutlined />
      </div>
      <Text strong className={styles.statsTitle}>使用统计</Text>
    </div>
    <div className={styles.statsList}>
      {statsData.map((stat, index) => (
        <div key={stat.label} className={styles.statsItem}>
          <div className={styles.statsItemContent}>
            <div className={styles.statsItemHeader}>
              <Text className={styles.statsLabel}>{stat.label}</Text>
              <Text strong className={styles.statsValue} style={{ color: stat.color }}>
                {stat.value}
              </Text>
            </div>
            <Text className={styles.statsSubLabel}>{stat.subLabel}</Text>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

const ActivityCard = () => (
  <Card className={styles.activityCard}>
    <div className={styles.activityHeader}>
      <div className={styles.activityHeaderLeft}>
        <div className={styles.activityIcon}>
          <ClockCircleOutlined />
        </div>
        <Text strong className={styles.activityTitle}>最近活动</Text>
      </div>
      <Button type="link" className={styles.viewAllBtn}>查看全部</Button>
    </div>
    <div className={styles.activityList}>
      {recentActivities.map((activity, index) => (
        <div key={activity.id}>
          <div className={styles.activityItem}>
            <div className={styles.activityContent}>
              <div className={styles.activityRow}>
                <Text strong className={styles.activityName}>{activity.title}</Text>
                <Badge
                  className={styles.activityBadge}
                  status="success"
                  text={
                    <span className={styles.statusText}>
                      <CheckCircleOutlined /> {activity.statusText}
                    </span>
                  }
                />
              </div>
              <Text className={styles.activityDate}>{activity.date}</Text>
            </div>
          </div>
          {index < recentActivities.length - 1 && (
            <Divider className={styles.activityDivider} />
          )}
        </div>
      ))}
    </div>
  </Card>
);

const UserCenterPage: React.FC = () => {
  return (
    <Layout className={styles.userCenterContainer}>
      <HeaderComponent />
      <Content className={styles.content}>
        <div className={styles.contentInner}>
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <Title level={3} className={styles.pageTitle}>用户中心</Title>
            <Text className={styles.pageSubTitle}>
              管理您的账户信息和使用记录
            </Text>
          </div>

          {/* Main Content */}
          <Row gutter={[24, 24]}>
            {/* Left Column */}
            <Col xs={24} lg={8}>
              <div className={styles.leftColumn}>
                <UserInfoCard />
                <StatsCard />
              </div>
            </Col>

            {/* Right Column */}
            <Col xs={24} lg={16}>
              <ActivityCard />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default UserCenterPage;
