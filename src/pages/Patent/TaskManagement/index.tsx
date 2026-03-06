import { history } from '@umijs/max';
import React from 'react';
import {
  CalendarOutlined,
  CheckCircleFilled,
  CheckCircleOutlined,
  ClockCircleFilled,
  ClockCircleOutlined,
  EyeOutlined,
  FileTextOutlined,
  RiseOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Divider, Progress, Row, Tag } from 'antd';
import HeaderNav from '../components/HeaderNav';
import styles from './index.less';

// 任务状态类型
interface Milestone {
  name: string;
  status: 'completed' | 'pending';
}
interface Task {
  id: string;
  title: string;
  status: string;
  statusColor: string;
  statusBg: string;
  progress: number;
  progressColor: string;
  milestones: Milestone[];
  createdAt: string;
  expectedDate: string;
}
interface StatCard {
  title: string;
  count: number;
  icon: React.ReactNode;
  bgColor: string;
  iconBg: string;
}
interface StatusDesc {
  title: string;
  desc: string;
  timeInfo: string;
  icon: React.ReactNode;
}
const TaskManagement: React.FC = () => {
  // 统计数据
  const stats: StatCard[] = [
    {
      title: '总任务数',
      count: 2,
      icon: <FileTextOutlined />,
      bgColor: '#f0f5ff',
      iconBg: '#2f54eb',
    },
    {
      title: '进行中',
      count: 1,
      icon: <SyncOutlined spin />,
      bgColor: '#fff7e6',
      iconBg: '#faad14',
    },
    {
      title: '已完成',
      count: 0,
      icon: <CheckCircleOutlined />,
      bgColor: '#f6ffed',
      iconBg: '#52c41a',
    },
    {
      title: '待处理',
      count: 1,
      icon: <ClockCircleOutlined />,
      bgColor: '#fff2f0',
      iconBg: '#f5222d',
    },
  ];
  // 任务数据
  const tasks: Task[] = [
    {
      id: '1',
      title: '一种智能寻车位系统',
      status: '专家审核中',
      statusColor: '#fa8c16',
      statusBg: '#fff7e6',
      progress: 75,
      progressColor: '#fa8c16',
      milestones: [
        { name: '文档撰写', status: 'completed' },
        { name: '专家审核', status: 'completed' },
        { name: '文档定稿', status: 'pending' },
        { name: '提交申请', status: 'pending' },
      ],
      createdAt: '2024/11/20',
      expectedDate: '2024/11/27',
    },
    {
      id: '2',
      title: '一种基于AI的图像识别方法',
      status: '文档已完成',
      statusColor: '#52c41a',
      statusBg: '#f6ffed',
      progress: 50,
      progressColor: '#1677ff',
      milestones: [
        { name: '文档撰写', status: 'completed' },
        { name: '专家审核', status: 'pending' },
        { name: '文档定稿', status: 'pending' },
        { name: '提交申请', status: 'pending' },
      ],
      createdAt: '2024/11/15',
      expectedDate: '',
    },
  ];
  // 状态说明数据
  const statusDescs: StatusDesc[] = [
    {
      title: '文档撰写',
      desc: 'AI正在分析创新方案并撰写专利文档',
      timeInfo: '预计时间：2-5个工作日',
      icon: <ClockCircleFilled />,
    },
    {
      title: '专家审核',
      desc: '专业人员正在审核文档质量和规范性',
      timeInfo: '预计时间：1-2个工作日',
      icon: <ClockCircleFilled />,
    },
    {
      title: '文档定稿',
      desc: '根据审核意见完善文档并最终确认',
      timeInfo: '操作：用户确认',
      icon: <CheckCircleFilled />,
    },
    {
      title: '提交申请',
      desc: '准备并提交正式的专利申请',
      timeInfo: '操作：确认提交',
      icon: <CheckCircleFilled />,
    },
  ];
  // 查看详情
  const handleViewDetail = (taskId: string) => {
    history.push(`/task-detail/${taskId}`);
  };

  return (
    <>
      <div className={styles.headerNav}>
        <HeaderNav activePath="/patent/task" />
      </div>

      <div className={styles.container}>
        {/* 页面标题 */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>任务管理</h1>
          <p className={styles.pageSubtitle}>
            跟踪您的专利申请进度，及时了解每个阶段的状态
          </p>
        </div>
        {/* 统计卡片 */}
        <Row gutter={[16, 16]} className={styles.statsRow}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                className={styles.statCard}
                style={{ background: stat.bgColor }}
              >
                <div className={styles.statContent}>
                  <div>
                    <div className={styles.statTitle}>{stat.title}</div>
                    <div className={styles.statCount}>{stat.count}</div>
                  </div>
                  <div
                    className={styles.statIcon}
                    style={{ background: stat.iconBg }}
                  >
                    {stat.icon}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        {/* 任务卡片列表 */}
        <Row gutter={[16, 16]} className={styles.tasksRow}>
          {tasks.map((task) => (
            <Col xs={24} lg={12} key={task.id}>
              <Card className={styles.taskCard} hoverable>
                {/* 任务头部 */}
                <div className={styles.taskHeader}>
                  <Tag
                    className={styles.statusTag}
                    style={{
                      color: task.statusColor,
                      background: task.statusBg,
                      borderColor: task.statusBg,
                    }}
                  >
                    <span
                      className={styles.statusDot}
                      style={{ background: task.statusColor }}
                    />
                    {task.status}
                  </Tag>
                </div>
                {/* 任务标题 */}
                <div className={styles.taskTitle}>{task.title}</div>
                {/* 进度条 */}
                <div className={styles.progressSection}>
                  <div className={styles.progressLabel}>
                    <span>完成进度</span>
                    <span style={{ color: task.statusColor }}>
                      {task.progress}%
                    </span>
                  </div>
                  <Progress
                    percent={task.progress}
                    showInfo={false}
                    strokeColor={task.progressColor}
                    trailColor="#f5f5f5"
                    className={styles.progressBar}
                  />
                </div>
                <Divider className={styles.divider} />
                {/* 里程碑跟踪 */}
                <div className={styles.milestoneSection}>
                  <div className={styles.sectionTitle}>里程碑跟踪</div>
                  <div className={styles.milestoneList}>
                    {task.milestones.map((milestone, mIndex) => (
                      <div key={mIndex} className={styles.milestoneItem}>
                        {milestone.status === 'completed' ? (
                          <CheckCircleFilled
                            className={styles.milestoneIconCompleted}
                          />
                        ) : (
                          <div className={styles.milestoneIconPending} />
                        )}
                        <span
                          className={
                            milestone.status === 'completed'
                              ? styles.milestoneTextCompleted
                              : styles.milestoneTextPending
                          }
                        >
                          {milestone.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Divider className={styles.divider} />
                {/* 日期信息 */}
                <div className={styles.dateSection}>
                  <div className={styles.dateItem}>
                    <CalendarOutlined className={styles.dateIcon} />
                    <span>创建：{task.createdAt}</span>
                  </div>
                  {task.expectedDate && (
                    <div className={styles.dateItem}>
                      <ClockCircleOutlined className={styles.dateIcon} />
                      <span>预计：{task.expectedDate}</span>
                    </div>
                  )}
                </div>
                {/* 查看详情按钮 */}
                <Button
                  type="primary"
                  block
                  icon={<EyeOutlined />}
                  className={styles.detailBtn}
                  onClick={() => handleViewDetail(task.id)}
                >
                  查看详情
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
        {/* 状态说明 */}
        <Card className={styles.statusCard}>
          <div className={styles.statusHeader}>
            <div className={styles.statusHeaderIcon}>
              <RiseOutlined />
            </div>
            <span className={styles.statusHeaderTitle}>状态说明</span>
          </div>
          <Row gutter={[24, 24]} className={styles.statusGrid}>
            {statusDescs.map((status, index) => (
              <Col xs={24} sm={12} key={index}>
                <div className={styles.statusItem}>
                  <h4 className={styles.statusTitle}>{status.title}</h4>
                  <p className={styles.statusDesc}>{status.desc}</p>
                  <div className={styles.statusTime}>
                    {status.icon}
                    <span>{status.timeInfo}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </>
  );
};
export default TaskManagement;
