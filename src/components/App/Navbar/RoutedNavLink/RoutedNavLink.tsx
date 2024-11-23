import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from '@mantine/core';
import { NAV_LINK_MAP } from '../constants';
import classes from './RoutedNavLink.module.css';

type RoutedNavLinkProps = {
  linkKey: keyof typeof NAV_LINK_MAP;
  toggle: () => void;
  children?: ReactNode;
};

export function RoutedNavLink({ linkKey, toggle, children }: RoutedNavLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const linkData = NAV_LINK_MAP[linkKey];

  return (
    <NavLink
      className={classes.link}
      label={NAV_LINK_MAP[linkKey].label}
      leftSection={linkData?.icon}
      onClick={() => {
        navigate(NAV_LINK_MAP[linkKey].to, { state: { name: linkData.label } });
        toggle();
      }}
      active={location.pathname === linkData.to}
    >
      {children}
    </NavLink>
  );
}
