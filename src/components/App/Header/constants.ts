import { NAV_LINK_KEY } from '../Navbar/constants';

export const PAGE_SUBTITLE: Record<NAV_LINK_KEY, string[]> = {
  dashboard: ['overview'],
  facilities: ['assets'],
  employees: ['assets'],
  fleet: ['assets'],
  inventory: ['product'],
  procurement: ['product'],
  harvesting: ['product', 'procurement'],
  processing: ['product', 'procurement'],
  manufacturing: ['product', 'procurement'],
  balanceSheet: ['financial'],
  contracts: ['financial'],
  awards: ['company'],
  statistics: ['company'],
};
