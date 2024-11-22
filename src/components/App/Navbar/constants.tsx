import { ReactNode } from 'react';
import {
  IconAward,
  IconBuildings,
  IconContract,
  IconCubeSend,
  IconGraph,
  IconPackages,
  IconReportMoney,
  IconRocket,
  IconTrolley,
  IconUsers,
} from '@tabler/icons-react';

type LinkData = {
  label: string;
  to: string;
  icon?: ReactNode;
};

export const NAV_LINK_MAP: Record<string, LinkData> = {
  dashboard: { label: 'Dashboard', to: '/dashboard' },
  facilities: {
    label: 'Facilities',
    to: '/facilities',
    icon: <IconBuildings />,
  },
  employees: { label: 'Employees', to: '/employees', icon: <IconUsers /> },
  fleet: { label: 'Fleet', to: '/fleet', icon: <IconRocket /> },
  procurement: {
    label: 'Procurement',
    to: '/procurement',
    icon: <IconTrolley />,
  },
  // harvesting: { label: 'Harvesting', to: '/procurement/harvesting' },
  // processing: { label: 'Processing', to: '/procurement/processing' },
  // manufacturing: { label: 'Manufacturing', to: '/procurement/manufacturing' },
  inventory: { label: 'Inventory', to: '/inventory', icon: <IconPackages /> },
  deliveries: {
    label: 'Deliveries',
    to: '/deliveries',
    icon: <IconCubeSend />,
  },
  balanceSheet: {
    label: 'Balance Sheet',
    to: '/balance-sheet',
    icon: <IconReportMoney />,
  },
  contracts: { label: 'Contracts', to: '/contracts', icon: <IconContract /> },
  awards: { label: 'Awards', to: '/awards', icon: <IconAward /> },
  statistics: { label: 'Statistics', to: '/statistics', icon: <IconGraph /> },
} as const;

export type NAV_LINK_KEY = keyof typeof NAV_LINK_MAP;
