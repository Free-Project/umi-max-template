// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(false);
  return {
    name,
    setName,
    menuCollapsed,
    setMenuCollapsed,
  };
};

export default useUser;
