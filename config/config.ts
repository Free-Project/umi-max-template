import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes,
  // close default layout, 
  // use custom layout in src/layouts/MatrixLayout/index.tsx
  layout: false, 
  npmClient: 'npm',
});
