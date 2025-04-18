import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Home', href: paths.dashboard.overview, icon: 'home' },
  // { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  // { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  // { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  // { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
  { key: 'metrics', title: 'Metrics', href: paths.dashboard.metrics, icon: 'metrics' },
  { key: 'health', title: 'Health', href: paths.dashboard.health, icon: 'health' },
  { key: 'portfolioview', title: 'Portfolio View', href: paths.dashboard.portfolioview, icon: 'portfolio' }
] satisfies NavItemConfig[];
