'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowSquareUpRight as ArrowSquareUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowSquareUpRight';
import { CaretUpDown as CaretUpDownIcon } from '@phosphor-icons/react/dist/ssr/CaretUpDown';

import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Logo } from '@/components/core/logo';

import { navItems } from './config';
import { navIcons } from './nav-icons';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        '--SideNav-background': '#B71C1C', // Deep Red Background
        '--SideNav-color': '#FFFFFF', // White text/icons
        '--NavItem-color': '#FFFFFF', // White for nav items
        '--NavItem-hover-background': 'rgba(255, 255, 255, 0.1)', // Light white hover
        '--NavItem-active-background': '#FBC02D', // Warm Yellow active background
        '--NavItem-active-color': '#B71C1C', // Deep Red text when active
        '--NavItem-disabled-color': '#BDBDBD', // Gray for disabled items
        '--NavItem-icon-color': '#FFFFFF', // White icons
        '--NavItem-icon-active-color': '#B71C1C', // Deep Red icon when active
        bgcolor: 'var(--SideNav-background)',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        top: 0,
        width: 'var(--SideNav-width)',
        borderRight: '2px solid #FBC02D', // Warm Yellow Border
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-flex' }}>
          <Logo color="light" height={32} width={122} />
        </Box>
      </Stack>
      <Divider sx={{ borderColor: '#FBC02D' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        {renderNavItems({ pathname, items: navItems })}
      </Box>
      <Divider sx={{ borderColor: '#FBC02D' }} />
    </Box>
  );
}

function renderNavItems({ items = [], pathname }: { items?: NavItemConfig[]; pathname: string }): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;

    acc.push(<NavItem key={key} pathname={pathname} {...item} />);

    return acc;
  }, []);

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
}

function NavItem({ disabled, external, href, icon, matcher, pathname, title }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;

  return (
    <li>
      <Box
  sx={{
    alignItems: 'center',
    borderRadius: 1,
    color: 'var(--NavItem-color)',
    cursor: 'pointer',
    display: 'flex',
    flex: '0 0 auto',
    gap: 1,
    p: '6px 16px',
    position: 'relative',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      bgcolor: 'var(--NavItem-hover-background)',
      color: '#FBC02D', // Warm Yellow text on hover
    },
    ...(disabled && {
      color: 'var(--NavItem-disabled-color)',
      cursor: 'not-allowed',
    }),
    ...(active && {
      bgcolor: 'var(--NavItem-active-background)', // Warm Yellow active background
      color: 'var(--NavItem-active-color)', // Deep Red text when active
      fontWeight: 700,
    }),
  }}
>
       <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          {Icon ? (
            <Icon
              fill={active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)'}
              fontSize="var(--icon-fontSize-md)"
              weight={active ? 'fill' : undefined}
            />
          ) : null}
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            component="span"
            sx={{ color: 'inherit', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px' }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}
