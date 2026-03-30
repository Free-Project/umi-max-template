import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  antd: {},
  access: {},
  initialState: {},
  model: {},
  request: {},
  routes,
  layout: false, 
  npmClient: 'npm',
});
