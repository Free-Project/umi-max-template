// Globally shared data
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

export default (): { [key: string]: any } => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  return {
    name,
    setName,
  };
};
