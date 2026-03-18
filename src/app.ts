/**
 * Runtime configuration
 * Global initial data configuration
 * For more information, see: https://umijs.org/docs/api/runtime-config#getinitialstate
 */

export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'Umi Max App' };
}
