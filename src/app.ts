import { request } from 'umi';

/**
 * Runtime configuration
 * Global initial data configuration
 * For more information, see: https://umijs.org/docs/api/runtime-config#getinitialstate
 */

export async function getInitialState(): Promise<{ [key: string]: any }> {
  const currentUser = await request('/api/getCurrentUser').then(res =>{
     res.json()
  });
  console.log('currentUser', currentUser);
  return {
    name: 'Umi Max App',
    currentUser,
  };
}
