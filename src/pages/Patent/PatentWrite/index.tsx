import React, { useState } from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Card,
  Progress,
  Row,
  Col,
  Typography,
  Tooltip,
  Collapse,
} from 'antd';
import {
  LeftOutlined,
  FileTextOutlined,
  BulbOutlined,
  QuestionCircleOutlined,
  TagOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  ReloadOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import HeaderNav from '../components/HeaderNav';
import styles from './index.less';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { Panel } = Collapse;

// 技术领域选项
const techFields = [
  { value: 'computer', label: '计算机技术' },
  { value: 'communication', label: '通信技术' },
  { value: 'electronic', label: '电子技术' },
  { value: 'mechanical', label: '机械工程' },
  { value: 'chemical', label: '化学化工' },
  { value: 'biotech', label: '生物技术' },
  { value: 'medical', label: '医疗技术' },
  { value: 'energy', label: '能源技术' },
  { value: 'material', label: '新材料' },
  { value: 'other', label: '其他领域' },
];

// 特殊技术标签
const techTags = [
  { label: '人工智能', value: 'ai' },
  { label: '节能减排', value: 'energy-saving' },
  { label: '区块链', value: 'blockchain' },
  { label: '量子技术', value: 'quantum' },
  { label: '航空航天', value: 'aerospace' },
  { label: '具身机器人', value: 'robot' },
  { label: '医疗器械', value: 'medical-device' },
  { label: '新材料', value: 'new-material' },
  { label: '制药/药物发现等', value: 'pharma' },
  { label: '工业母机', value: 'machine-tool' },
];

// 进度项
const progressItems = [
  { key: 'name', label: '创意名称' },
  { key: 'scenario', label: '适用场景' },
  { key: 'innovation', label: '灵感描述' },
  { key: 'painpoint', label: '痛点分析' },
  { key: 'techfield', label: '技术领域' },
];

/**
 * 专利撰写
 */
const PatentWriting: React.FC = () => {
  const [form] = Form.useForm();
  const [progress, setProgress] = useState(0);
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  // 计算进度
  const calculateProgress = (changedValues: any, allValues: any) => {
    const fields = ['name', 'scenario', 'innovation', 'painpoint', 'techfield'];
    let completed = 0;
    const newCompletedItems: string[] = [];

    fields.forEach((field) => {
      if (allValues[field] && String(allValues[field]).trim() !== '') {
        completed++;
        newCompletedItems.push(field);
      }
    });

    setCompletedItems(newCompletedItems);
    setProgress(Math.round((completed / fields.length) * 100));
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log('Form values:', values);
    });
  };

  return (
    <div className={styles.patentWritingPage}>
      {/* 顶部导航栏 */}
      <HeaderNav activePath="/patent/write" />

      {/* 返回按钮 */}
      <div className={styles.backLink}>
        <LeftOutlined />
        <span>返回首页</span>
      </div>

      {/* 主内容区 */}
      <div className={styles.mainContent}>
        <Row gutter={24}>
          {/* 左侧表单区 */}
          <Col xs={24} lg={16}>
            <Card className={styles.formCard}>
              {/* 标题区 */}
              <div className={styles.titleSection}>
                <div className={styles.titleIcon}>
                  <FileTextOutlined />
                </div>
                <div className={styles.titleContent}>
                  <Title level={4} className={styles.mainTitle}>
                    专利撰写
                  </Title>
                  <Text className={styles.subTitle}>
                    填写您的创意信息，我们将为您撰写成专业的专利申请文件
                  </Text>
                </div>
              </div>

              <Form
                form={form}
                layout="vertical"
                className={styles.patentForm}
                onValuesChange={calculateProgress}
              >
                {/* 创意名称 */}
                <Form.Item
                  label={
                    <span className={styles.formLabel}>
                      <FileTextOutlined className={styles.labelIcon} />
                      创意名称
                    </span>
                  }
                  name="name"
                  rules={[{ required: true, message: '请输入创意名称' }]}
                >
                  <Input
                    placeholder="如：一种基于笔迹的安全支付系统"
                    className={styles.formInput}
                  />
                </Form.Item>

                {/* 创意适用的场景 */}
                <Form.Item
                  label={
                    <span className={styles.formLabel}>
                      <BulbOutlined className={styles.labelIcon} />
                      创意适用的场景
                    </span>
                  }
                  name="scenario"
                  rules={[{ required: true, message: '请输入适用场景' }]}
                >
                  <Input
                    placeholder="如：线上支付场景、商场购物场景"
                    className={styles.formInput}
                  />
                </Form.Item>

                {/* 灵感描述 */}
                <Form.Item
                  label={
                    <span className={styles.formLabel}>
                      <QuestionCircleOutlined className={styles.labelIcon} />
                      请用一句话描述您的灵感或创新点
                    </span>
                  }
                  name="innovation"
                  rules={[{ required: true, message: '请输入灵感或创新点' }]}
                >
                  <TextArea
                    placeholder="如：新提出基于触屏笔迹签定的安全支付方式，通过多特征融合和超网络分类器确认唯一签名..."
                    rows={5}
                    className={styles.formTextArea}
                  />
                </Form.Item>

                {/* 痛点分析 */}
                <Form.Item
                  label={
                    <span className={styles.formLabel}>
                      <InfoCircleOutlined className={styles.labelIcon} />
                      本创新方案需要解决的痛点/技术问题是什么？
                      <Tooltip title="描述当前存在的技术问题或痛点">
                        <QuestionCircleOutlined className={styles.helpIcon} />
                      </Tooltip>
                    </span>
                  }
                  name="painpoint"
                  rules={[{ required: true, message: '请输入需要解决的技术问题' }]}
                >
                  <TextArea
                    placeholder="请详细描述需要解决的技术问题..."
                    rows={4}
                    className={styles.formTextArea}
                  />
                </Form.Item>

                {/* 技术领域 */}
                <Form.Item
                  label={
                    <span className={styles.formLabel}>
                      <AppstoreOutlined className={styles.labelIcon} />
                      所在技术领域
                    </span>
                  }
                  name="techfield"
                  rules={[{ required: true, message: '请选择技术领域' }]}
                >
                  <Select
                    placeholder="请选择技术领域"
                    className={styles.formSelect}
                    suffixIcon={<ReloadOutlined />}
                  >
                    {techFields.map((field) => (
                      <Option key={field.value} value={field.value}>
                        {field.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                {/* 特殊技术标签 */}
                <div className={styles.tagSection}>
                  <div className={styles.tagSectionHeader}>
                    <TagOutlined className={styles.tagIcon} />
                    <Text className={styles.tagTitle}>特殊技术标签（可选）</Text>
                  </div>
                  <Form.Item name="techTags" className={styles.tagFormItem}>
                    <Checkbox.Group className={styles.tagGroup}>
                      <Row gutter={[16, 12]}>
                        {techTags.map((tag) => (
                          <Col span={8} key={tag.value}>
                            <Checkbox value={tag.value} className={styles.tagCheckbox}>
                              {tag.label}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                </div>

                {/* 更多信息补充 */}
                <Collapse ghost className={styles.moreInfoCollapse}>
                  <Panel
                    header={
                      <span className={styles.collapseHeader}>
                        <InfoCircleOutlined className={styles.collapseIcon} />
                        更多信息补充（选填）
                      </span>
                    }
                    key="1"
                    extra={<span className={styles.collapseExtra}>展开</span>}
                  >
                    <Form.Item
                      label="补充说明"
                      name="additionalInfo"
                      className={styles.additionalFormItem}
                    >
                      <TextArea
                        placeholder="请输入其他补充信息..."
                        rows={4}
                        className={styles.formTextArea}
                      />
                    </Form.Item>
                  </Panel>
                </Collapse>

                {/* 提交按钮 */}
                <Button
                  type="primary"
                  size="large"
                  block
                  className={styles.submitBtn}
                  onClick={handleSubmit}
                >
                  开始撰写专利申请文件
                  <span className={styles.btnArrow}>→</span>
                </Button>
              </Form>
            </Card>
          </Col>

          {/* 右侧进度区 */}
          <Col xs={24} lg={8}>
            {/* 填写进度卡片 */}
            <Card className={styles.progressCard}>
              <div className={styles.progressHeader}>
                <div className={styles.progressDot}></div>
                <Text className={styles.progressTitle}>填写进度</Text>
              </div>

              <div className={styles.progressInfo}>
                <Text className={styles.progressLabel}>必填项完成度</Text>
                <Text className={styles.progressPercent}>{progress}%</Text>
              </div>

              <Progress
                percent={progress}
                showInfo={false}
                strokeColor="#1677ff"
                trailColor="#f0f0f0"
                className={styles.progressBar}
              />

              <div className={styles.progressList}>
                {progressItems.map((item) => (
                  <div
                    key={item.key}
                    className={`${styles.progressItem} ${
                      completedItems.includes(item.key) ? styles.completed : ''
                    }`}
                  >
                    <span className={styles.progressItemDot}></span>
                    <span className={styles.progressItemLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* 撰写提示卡片 */}
            <Card className={styles.tipsCard}>
              <div className={styles.tipsHeader}>
                <InfoCircleOutlined className={styles.tipsIcon} />
                <Text className={styles.tipsTitle}>撰写提示</Text>
              </div>

              <div className={styles.tipsContent}>
                <div className={styles.tipItem}>
                  <CheckCircleOutlined className={styles.tipCheckIcon} />
                  <Text className={styles.tipText}>
                    填写越详细，生成的专利文档质量越高
                  </Text>
                </div>
              </div>

              <div className={styles.tipsList}>
                {['痛点分析', '技术领域'].map((item) => (
                  <div key={item} className={styles.tipsListItem}>
                    <span className={styles.tipsListDot}></span>
                    <Text className={styles.tipsListText}>{item}</Text>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PatentWriting;
