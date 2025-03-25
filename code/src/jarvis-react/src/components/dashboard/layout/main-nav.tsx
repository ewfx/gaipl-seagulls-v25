'use client';

import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { Bell as BellIcon } from '@phosphor-icons/react';
import { List as ListIcon } from '@phosphor-icons/react';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react';

import { usePopover } from '@/hooks/use-popover';

import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();
  
  const userPopover = usePopover<HTMLDivElement>();

  // 🔔 State for Notification Dropdown
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  // Sample Notifications with Links
  const notifications = [
    { message: "🚨 New incident reported!", link: "/incidents/123" },
    { message: "🛠️ Incident #102 resolved.", link: "/incidents/102" },
    { message: "⚠️ Server load high, check logs!", link: "/logs" },
    { message: "✅ Your request has been approved.", link: "/requests" },
  ];

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`dashboard/incidents/${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle Notification Popover
  const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorEl(null);
  };

  // Function to navigate to notification link
  const handleNotificationClick = (link: string) => {
    router.push(link);
    handleCloseNotifications(); // Close popover after clicking
  };

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-background-paper)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 2 }}
        >
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <IconButton onClick={() => setOpenNav(true)} sx={{ display: { lg: 'none' } }}>
              <ListIcon />
            </IconButton>
            {/* 🔍 Search Box */}
            <form onSubmit={handleSearch}>
              <TextField
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                size="small"
                sx={{ width: 250 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MagnifyingGlassIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Stack>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            {/* 🔔 Notifications with Dropdown */}
            <Tooltip title="Notifications">
              <Badge badgeContent={notifications.length} color="error">
                <IconButton onClick={handleOpenNotifications}>
                  <BellIcon />
                </IconButton>
              </Badge>
            </Tooltip>
            {/* Notification Popover */}
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleCloseNotifications}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              sx={{ mt: 1 }}
            >
            <Box sx={{ width: 300, p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Notifications
                </Typography>
                <Divider />
                <List>
                  {notifications.map((notification, index) => (
                    <ListItemButton key={index} onClick={() => handleNotificationClick(notification.link)}>
                      <ListItemText primary={notification.message} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Popover>
            {/* 🧑 User Avatar */}
            <Avatar
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              src="/assets/mahesh-pic.png"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Box>
      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
      <MobileNav onClose={() => setOpenNav(false)} open={openNav} />
    </React.Fragment>
  );
}