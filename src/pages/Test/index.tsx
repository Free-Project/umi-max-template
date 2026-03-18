import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import styles from './index.less'

const TestPage = () => {
  return (
    <ProCard>
      <div className={styles.test}>
        Test page
      </div>
    </ProCard>
  );
};

export default TestPage;
