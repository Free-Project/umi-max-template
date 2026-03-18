import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  handleGoHome = () => {
    history.push('/');
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Result
          status="500"
          title="An error occurred on the page"
          subTitle={this.state.error?.message || 'Unknown error'}
          extra={
            <>
              <Button type="primary" onClick={this.handleReset}>
                Try Again
              </Button>
              <Button style={{ marginLeft: 16 }} onClick={this.handleGoHome}>
                Back to Home
              </Button>
            </>
          }
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
