import { Button, Empty, Space, Typography } from 'antd';
import React, { Component } from 'react';
import styles from './index.less';

const { Title, Text } = Typography;

interface ErrorBoundaryProps {
  children?: React.ReactNode;
  onRetry?: () => void;
}

interface State {
  error?: Error;
  info: {
    componentStack: string;
  };
}

/**
 * 错误边界组件
 */
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  State
> {
  state: State = {
    error: undefined,
    info: {
      componentStack: '',
    },
  };

  componentDidCatch(error: any, info: any) {
    this.setState({ error, info });
  }

  render() {
    const { children, onRetry } = this.props;
    const { error, info } = this.state;

    if (error) {
      return (
        <div className={styles['error-boundary-container']}>
          <Empty
            className={styles['error-info']}
            image={<div className={styles['error-icon']}>🤔</div>}
            description={
              <>
                <Title level={5}> There seems to be a minor issue with component rendering </Title>
                <div>
                  <Text type={'secondary'}>
                    But don't worry, your data is still intact. 
                  </Text>
                  <br />
                  <div style={{ marginTop: 8 }}>
                    <Text type={'secondary'}>
                      You can try to retry. If the issue persists after retrying, please contact customer service
                    </Text>
                  </div>
                </div>
              </>
            }
          >
            <Space>
              <Button type="primary" onClick={onRetry}>
                Retry
              </Button>
            </Space>
          </Empty>
          <div className={styles['error-detail-content']}>
            <div className={styles['error-item-name']}>
              <Text>
                Error message：
                {error?.toString()}
              </Text>
            </div>
            <div className={styles['error-item-component-stack']}>
              {info?.componentStack.split('\n').map((i, index) => (
                <div
                  key={i + index}
                  className={styles['error-item-component_stack-item']}
                >
                  <Text type={'secondary'}>{i}</Text>
                </div>
              )) ?? null}
            </div>
          </div>
        </div>
      );
    }

    return <>{children}</>;
  }
}
