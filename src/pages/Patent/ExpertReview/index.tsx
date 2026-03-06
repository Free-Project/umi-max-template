import {
  AuditOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  StarFilled,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Row,
  Tag,
  Typography,
} from 'antd';
import React from 'react';
import HeaderNav from '../components/HeaderNav';
import styles from './index.less';

const { Title, Text, Paragraph } = Typography;

const reviewSteps = [
  {
    step: 1,
    title: '提交审核',
    time: '24小时内',
    description: '专家匹配与初步审查',
  },
  {
    step: 2,
    title: '技术审核',
    time: '24小时',
    description: '技术准确性和语言规范性',
  },
  {
    step: 3,
    title: '格式审核',
    time: '36小时',
    description: '权利要求书格式审核',
  },
  {
    step: 4,
    title: '专利性审核',
    time: '48小时',
    description: '新颖性与创造性评估',
  },
  {
    step: 5,
    title: '完整性审核',
    time: '48小时',
    description: '说明书完整性检查',
  },
  {
    step: 6,
    title: '反馈生成',
    time: '完成',
    description: '生成详细审核报告',
  },
];

const reviewProgress = [
  { label: '技术准确性', status: 'pending' as const },
  { label: '权利要求格式', status: 'pending' as const },
  { label: '新颖性与创造性', status: 'pending' as const },
  { label: '说明书完整性', status: 'pending' as const },
  { label: '语言规范性', status: 'pending' as const },
];

const features = [
  {
    title: '专家匹配',
    description: '根据技术领域自动匹配相关专业背景的审核专家',
  },
  {
    title: '结构化反馈',
    description: '专家通过标准化表单提供详细的修改意见',
  },
  {
    title: '质量保证',
    description: '确保专利文档质量，增加获批可能性',
  },
];

const ReviewProcessCard = () => (
  <Card className={styles.processCard}>
    <div className={styles.sectionHeader}>
      <div className={styles.sectionIcon}>
        <AuditOutlined />
      </div>
      <Text strong className={styles.sectionTitle}>
        审核流程与标准
      </Text>
    </div>
    <Row gutter={[16, 16]}>
      {reviewSteps.map((item, index) => (
        <Col xs={24} sm={12} lg={8} key={item.step}>
          <Card
            className={`${styles.stepCard} ${
              index === 0 ? styles.stepCardActive : ''
            }`}
            hoverable
          >
            <div className={styles.stepHeader}>
              <div
                className={`${styles.stepNumber} ${
                  index === 0 ? styles.stepNumberActive : ''
                }`}
              >
                <span>{item.step}</span>
              </div>
              <div className={styles.stepContent}>
                <Text strong className={styles.stepTitle}>
                  {item.title}
                </Text>
                <div className={styles.stepTime}>
                  <ClockCircleOutlined />
                  <span>{item.time}</span>
                </div>
                <Text className={styles.stepDesc}>{item.description}</Text>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </Card>
);

const CurrentReviewCard = () => (
  <Card className={styles.reviewCard} bodyStyle={{ padding: 0 }}>
    {/* Header */}
    <div className={styles.reviewHeader}>
      <div className={styles.reviewTitle}>
        <Title level={5}>一种智能寻车位系统</Title>
        <div className={styles.reviewMeta}>
          <Badge
            color="#FAAD14"
            text={<Text style={{ color: '#FAAD14' }}>审核中</Text>}
          />
          <Text type="secondary">提交：2024/11/20</Text>
        </div>
      </div>
      <Button type="primary" icon={<EyeOutlined />}>
        查看文档
      </Button>
    </div>

    {/* Expert Info */}
    <div className={styles.expertInfoSection}>
      <Text strong className={styles.expertInfoSectionTitle}>
        审核专家
      </Text>
      <div className={styles.expertInfoContent}>
        <Avatar
          size={56}
          icon={<UserOutlined />}
          className={styles.expertAvatar}
        />
        <div className={styles.expertDetails}>
          <div className={styles.expertNameRow}>
            <Text strong>李明教授</Text>
            <Tag color="gold" className={styles.ratingTag}>
              <StarFilled />
              <span>4.9</span>
            </Tag>
          </div>
          <Text className={styles.expertTitle}>知识产权专家</Text>
          <Text className={styles.expertTitle}>计算机软件专利</Text>
        </div>
      </div>
    </div>

    {/* Review Status */}
    <div className={styles.reviewStatus}>
      <div className={styles.statusBox}>
        <div className={styles.spinner} />
        <div className={styles.statusText}>
          <Text strong className={styles.statusTitle}>
            专家正在审核中...
          </Text>
          <Text className={styles.statusDesc}>
            预计1-2个工作日内完成审核并提供反馈
          </Text>
        </div>
      </div>

      <Row className={styles.progressGrid}>
        {reviewProgress.map((item) => (
          <Col span={24 / reviewProgress.length} key={item.label}>
            <div className={styles.progressItem}>
              <span className={styles.progressLabel}>{item.label}</span>
              <div className={styles.progressCircle}>
                <ClockCircleOutlined />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </Card>
);

const AboutSection = () => (
  <Card className={styles.aboutSection}>
    <Text strong className={styles.aboutTitle}>
      关于专家审核
    </Text>
    <Row gutter={[16, 16]}>
      {features.map((feature) => (
        <Col xs={24} sm={8} key={feature.title}>
          <div className={styles.aboutItem}>
            <Text strong className={styles.aboutItemTitle}>
              {feature.title}
            </Text>
            <Paragraph className={styles.aboutItemDesc}>
              {feature.description}
            </Paragraph>
          </div>
        </Col>
      ))}
    </Row>
  </Card>
);

const ExpertReviewPage: React.FC = () => {
  return (
    <>
      <div className={styles.headerNav}>
        <HeaderNav activePath="/patent/review" />
      </div>
      <div className={styles.content}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <Title level={4}>专家审核</Title>
          <Text className={styles.subTitle}>
            专业人员对您的专利文档进行全面审核，确保质量和合规性
          </Text>
        </div>

        <ReviewProcessCard />
        <CurrentReviewCard />
        <AboutSection />
      </div>
    </>
  );
};

export default ExpertReviewPage;
