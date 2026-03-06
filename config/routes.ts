import { menus } from './menus';

// 菜单转换成路由
const transMenuToRoute = (routes: any[]): any[] => {
  return routes.map((route: any) => {
    const newRoute = { ...route };
    if ('icon' in route) {
      delete newRoute.icon;
    }
    if (Array.isArray(route.routes)) {
      transMenuToRoute(route.routes);
    }
    return newRoute;
  });
};

/**
 * 菜单中的icon是ReactNode
 * 而Layout中需要的route必须是纯Json数据
 * 因此需要转成纯Json数据
 */
export const routes = transMenuToRoute(menus);
