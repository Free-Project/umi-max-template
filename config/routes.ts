import { menus as routes } from './menus';

/**
 * Because routes in Umi's config must be pure JSON data and cannot directly import tsx files,
 * and since icon is a ReactNode, it needs to be configured in menus.tsx.
 * Therefore, we need to import menus first, then export routes to convert it to pure JSON data.
 */
export { routes };
