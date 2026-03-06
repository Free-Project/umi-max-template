import { ArrowRightOutlined, WomanOutlined } from '@ant-design/icons';
import { Button, Card, Tag } from 'antd';
import React from 'react';
import styles from './index.less';

// 产品使用步骤数据
const productUsageSteps = [
  {
    id: 1,
    iconSrc:
      'https://mdn.alipayobjects.com/fecodex_image/afts/img/GWDYS6yyPssAAAAAQVAAAAgAejH3AQBr/original',
    descriptionLine1: '创新点描述',
    descriptionLine2: '输入您的创新想法与技术方案',
  },
  {
    id: 2,
    iconSrc:
      'https://mdn.alipayobjects.com/fecodex_image/afts/img/YftMSrZuCGYAAAAAQVAAAAgAejH3AQBr/original',
    descriptionLine1: '智能撰写',
    descriptionLine2: 'AI自动分析并生成专利文档',
  },
  {
    id: 3,
    iconSrc:
      'https://mdn.alipayobjects.com/fecodex_image/afts/img/RV80Tr1zYioAAAAAQVAAAAgAejH3AQBr/original',
    descriptionLine1: '专家审核',
    descriptionLine2: '专业人员审核质量与规范性',
  },
  {
    id: 4,
    iconSrc:
      'https://mdn.alipayobjects.com/fecodex_image/afts/img/PD6-SYkTTMEAAAAAQUAAAAgAejH3AQBr/original',
    descriptionLine1: '确认定稿',
    descriptionLine2: '发明人确认并完善专利内容',
  },
];

export default () => {
  return (
    <div style={{ padding: 24 }}>
      <div className={styles.mainContent}>
        {/* Banner */}
        <div className={styles.bannerContainer}>
          <Tag
            color="rgb(239,246,255)"
            className={styles.highlightTag}
          >
            <div className={styles.logoContainerShared}>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/uCC_SIZV8QUAAAAAMoAAAAgAejH3AQBr/original"
                className={styles.tagIcon}
              />
              <span className={styles.bannerTitle}>
                革命性的智能专利服务解决方案
              </span>
            </div>
          </Tag>
          <span className={styles.platformTitle}>PatLeap 专利创意孵化平台</span>
          <div className={styles.descriptionContainer}>
            <span className={styles.descriptionTextCommon}>
              通过人工智能技术彻底改变传统专利申请的复杂流程
            </span>
            <span className={styles.descriptionTextCommon}>
              仅需输入创新灵感，即可快速成为专利发明人
            </span>
          </div>
          <div className={styles.actionButtons}>
            <Button
              type="primary"
              size="large"
              className={styles.startWritingButton}
            >
              <span className={styles.buttonTextCommon}>开始撰写专利</span>
              <ArrowRightOutlined className={styles.buttonTextCommon} />
            </Button>
            <Button size="large" className={styles.learnMoreButton}>
              了解更多
            </Button>
          </div>
          <div className={styles.statisticsContainer}>
            <div className={styles.statisticItem}>
              <a className={styles.statisticValueShared}>20+</a>
              <span className={styles.statisticLabelShared}>覆盖行业领域</span>
            </div>
            <div className={styles.statisticItem2}>
              <a className={styles.statisticValueShared}>数亿</a>
              <span className={styles.statisticLabelShared}>专利数据量</span>
            </div>
            <div className={styles.statisticItem3}>
              <a className={styles.statisticValueShared}>数亿</a>
              <span className={styles.statisticLabelShared}>文献数据量</span>
            </div>
            <div className={styles.statisticItem4}>
              <a className={styles.statisticValueShared}>99%</a>
              <span className={styles.statisticLabelShared}>客户满意度</span>
            </div>
          </div>
        </div>

        {/* FeatureCore */}
        <div className={styles.featuresContainer}>
          <div className={styles.coreFeaturesTitleContainer}>
            <span className={styles.coreFeaturesTitle}>核心功能</span>
            <span className={styles.featuresSubtitle}>
              全流程AI辅助，专业高效的专利申请体验
            </span>
          </div>
          <div className={styles.featuresCardContainer}>
            <div className={styles.featureCard}>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/q1zKTbMrMtEAAAAAQHAAAAgAejH3AQBr/original"
                className={styles.featureIcon1}
              />
              <div className={styles.featureTextContainer}>
                <span className={styles.featureTitle1Shared}>
                  技术交底书撰写
                </span>
                <span className={styles.featureDescription1}>
                  AI智能撰写专业技术交底书，快速准确提取创新要点
                </span>
              </div>
            </div>
            <div className={styles.featureCard2}>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/J8LpTbUrjDQAAAAAQGAAAAgAejH3AQBr/original"
                className={styles.featureIcon2}
              />
              <div className={styles.featureTextContainer2}>
                <span className={styles.featureTitle1Shared}>
                  专利申请文件初稿
                </span>
                <span className={styles.featureDescription2Shared}>
                  结合专家审核，确保高质量专利文档输出
                </span>
              </div>
            </div>
            <div className={styles.featureCard3}>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/W406R4MlqM4AAAAAQHAAAAgAejH3AQBr/original"
                className={styles.featureIcon3}
              />
              <div className={styles.featureTextContainer3}>
                <span className={styles.featureTitle1Shared}>
                  创意查新/检索
                </span>
                <span className={styles.featureDescription2Shared}>
                  海量专利数据库快速检索，精准评估创新性
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* InnovationHub */}
        <div className={styles.innovationHubContainer}>
          <span className={styles.hubHeaderTitle}>专利创意孵化产品架构</span>
          <div className={styles.hubContentWrapper}>
            <span className={styles.serviceDescription}>
              AI驱动的专利大模型与智能服务体系
            </span>
            <div className={styles.serviceSection}>
              <div className={styles.serviceContainer}>
                <div className={styles.serviceGrid}>
                  <div className={styles.serviceItem}>
                    <img
                      alt=""
                      src="https://mdn.alipayobjects.com/fecodex_image/afts/img/G7faRIVKOX0AAAAAQDAAAAgAejH3AQBr/original"
                      className={styles.serviceIconShared}
                    />
                    <span className={styles.serviceLabel}>智能服务体系</span>
                  </div>
                  <div className={styles.subServiceContainer}>
                    <div className={styles.subServiceItemCommon}>
                      <img
                        alt=""
                        src="https://mdn.alipayobjects.com/fecodex_image/afts/img/mKorSppXC-0AAAAAJfAAAAgAejH3AQBr/original"
                        className={styles.subServiceIcon1Shared}
                      />
                      <span className={styles.subServiceLabel1Shared}>
                        专利查新检索
                      </span>
                    </div>
                    <div className={styles.subServiceItemCommon}>
                      <img
                        alt=""
                        src="https://mdn.alipayobjects.com/fecodex_image/afts/img/4e_wQb7o9ecAAAAAJfAAAAgAejH3AQBr/original"
                        className={styles.subServiceIcon1Shared}
                      />
                      <span className={styles.subServiceLabel1Shared}>
                        AI交底书/专利撰写
                      </span>
                    </div>
                    <div className={styles.subServiceItemCommon}>
                      <img
                        alt=""
                        src="https://mdn.alipayobjects.com/fecodex_image/afts/img/cqoPRZyeyxgAAAAAJTAAAAgAejH3AQBr/original"
                        className={styles.subServiceIcon3}
                      />
                      <span className={styles.subServiceLabel1Shared}>
                        辅助创造发明
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.dividerLine} />
                <div className={styles.coreCapabilitiesSection}>
                  <span className={styles.coreCapabilitiesTitle}>核心能力</span>
                  <div className={styles.coreCapabilitiesGrid}>
                    <div className={styles.capabilityRow1Common}>
                      <div className={styles.capabilityItem1Common}>
                        <img
                          alt=""
                          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NRPyR6ZhGMMAAAAANXAAAAgAejH3AQBr/original"
                          className={styles.capabilityIcon1Shared}
                        />
                        <span className={styles.capabilityIcon5Common}>
                          AI检索
                        </span>
                      </div>
                      <div className={styles.capabilityItem1Common}>
                        <img
                          alt=""
                          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/d2uFS6UXutkAAAAAPeAAAAgAejH3AQBr/original"
                          className={styles.capabilityIcon2}
                        />
                        <span className={styles.capabilityIcon5Common}>
                          AI语义分析
                        </span>
                      </div>
                    </div>
                    <div className={styles.capabilityRow1Common}>
                      <div className={styles.capabilityItem3Common}>
                        <img
                          alt=""
                          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Uvk-SqY-meAAAAAAK_AAAAgAejH3AQBr/original"
                          className={styles.capabilityIcon3}
                        />
                        <span className={styles.capabilityIcon5Common}>
                          AI交底书撰写
                        </span>
                      </div>
                      <div className={styles.capabilityItem1Common}>
                        <img
                          alt=""
                          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/5xqpR6gJ1OAAAAAAKEAAAAgAejH3AQBr/original"
                          className={styles.capabilityIcon4}
                        />
                        <span className={styles.capabilityLabel4Shared}>
                          AI权利要求书
                        </span>
                      </div>
                    </div>
                    <div className={styles.capabilityRow1Common}>
                      <div className={styles.capabilityItem1Common}>
                        <WomanOutlined
                          className={styles.capabilityIcon5Common}
                        />
                        <span className={styles.capabilityIcon5Common}>
                          AI辅助发明
                        </span>
                      </div>
                      <div className={styles.capabilityItem1Common}>
                        <img
                          alt=""
                          src="https://mdn.alipayobjects.com/fecodex_image/afts/img/eC4KRao9J_0AAAAAIIAAAAgAejH3AQBr/original"
                          className={styles.capabilityIcon1Shared}
                        />
                        <span className={styles.capabilityLabel4Shared}>
                          专利价值优化
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.modelSection}>
                <div className={styles.modelHeaderCommon}>
                  <img
                    alt=""
                    src="https://mdn.alipayobjects.com/fecodex_image/afts/img/NMzaSp3brzMAAAAAQEAAAAgAejH3AQBr/original"
                    className={styles.serviceIconShared}
                  />
                  <span className={styles.modelTitle}>PatLeap 专利大模型</span>
                </div>
                <div className={styles.modelHeaderCommon}>
                  <div className={styles.detailItem1}>
                    <span className={styles.detailLabel1Shared}>覆盖领域</span>
                    <span className={styles.detailValue1Shared}>
                      20+行业领域
                    </span>
                  </div>
                  <div className={styles.detailItem2}>
                    <span className={styles.detailLabel1Shared}>专利数据</span>
                    <span className={styles.detailValue1Shared}>
                      数亿专利数据
                    </span>
                  </div>
                  <div className={styles.detailItem3}>
                    <span className={styles.detailLabel1Shared}>文献数据</span>
                    <span className={styles.detailValue1Shared}>
                      数亿文献数据
                    </span>
                  </div>
                  <div className={styles.detailItem4}>
                    <span className={styles.detailLabel1Shared}>法律数据</span>
                    <span className={styles.detailValue1Shared}>
                      数亿法律数据
                    </span>
                  </div>
                  <div className={styles.detailItem5}>
                    <span className={styles.detailLabel1Shared}>私域模型</span>
                    <span className={styles.detailValue1Shared}>
                      定制化私域模型
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ProductUsageProcess */}
        <div className={styles.productUsageProcess}>
          <div className={styles.processContainer}>
            <span className={styles.processTitle}>产品使用流程</span>
            <span className={styles.processSubtitle}>
              四步完成专利申请，简单高效
            </span>
            <div className={styles.processStepsWrapper}>
              {productUsageSteps.map((step, index) => (
                <div className={styles.stepContainer} key={step.id}>
                  <img
                    alt=""
                    src={step.iconSrc}
                    className={styles[`stepIcon${step.id}`]}
                  />
                  {index < productUsageSteps.length - 1 && (
                    <div className={styles[`stepDivider${step.id}`]} />
                  )}
                </div>
              ))}
            </div>
            <div className={styles.stepDescriptionsContainer}>
              {productUsageSteps.map((step) => (
                <div className={styles.stepDescriptionItem} key={step.id}>
                  <span className={styles.stepDescriptionLine1}>
                    {step.descriptionLine1}
                  </span>
                  <span className={styles.stepDescriptionLine2}>
                    {step.descriptionLine2}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CustomerFacing */}
        <div className={styles.customerFacingContainer}>
          <span className={styles.customerGroupLabel}>面向客户群体</span>
          <span className={styles.serviceDescription}>
            为不同类型的创新主体提供专业服务
          </span>
          <div className={styles.serviceCategoryContainer}>
            <div className={styles.inventorServiceCardCommon}>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/A_FAQKF1rhQAAAAAQKAAAAgAejH3AQBr/original"
                className={styles.inventorIconShared}
              />
              <span className={styles.inventorTitleShared}>独立发明人</span>
              <span className={styles.inventorDescriptionShared}>
                为个人创新者提供专业级专利申请服务
              </span>
            </div>
            <div className={styles.inventorServiceCardCommon}>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/wNv7Ro1WzhIAAAAAQKAAAAgAejH3AQBr/original"
                className={styles.inventorIconShared}
              />
              <span className={styles.enterpriseTitle}>中小型创新企业</span>
              <span className={styles.inventorDescriptionShared}>
                企业级创新管理与知识产权保护方案
              </span>
            </div>
            <div className={styles.inventorServiceCardCommon}>
              <img
                alt=""
                src="https://mdn.alipayobjects.com/fecodex_image/afts/img/sVv5RbVCbO0AAAAAQJAAAAgAejH3AQBr/original"
                className={styles.inventorIconShared}
              />
              <span className={styles.inventorTitleShared}>高校科研机构</span>
              <span className={styles.inventorDescriptionShared}>
                科研成果转化与专利申报一站式平台
              </span>
            </div>
          </div>
        </div>

        {/* PatentJourneyStart */}
        <div className={styles.patentJourneyStartContainer}>
          <Card
            className={styles.gradientCard}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
            hoverable
          >
            <div className={styles.content}>
              <h2 className={styles.title}>{'专利之旅'}</h2>
              <p className={styles.description}>{'开始您的专利申请之旅'}</p>
              <button type="button" className={styles.actionButton}>
                立即开始
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
