import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { ActiveIncidents } from '@/components/dashboard/overview/active-incidents';
import { LatestIncidents } from '@/components/dashboard/overview/latest-incidents';
import { IncidentsInProgress } from '@/components/dashboard/overview/inprogress-incidents';
import { HealthStatus } from '@/components/dashboard/overview/health-status';
import { ClosedIncidents } from '@/components/dashboard/overview/closed-incidents';
import { Traffic } from '@/components/dashboard/overview/traffic';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <ActiveIncidents diff={12} trend="up" sx={{ height: '100%' }} value="20" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <IncidentsInProgress diff={12} trend="up" sx={{ height: '100%' }} value={10} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <ClosedIncidents diff={12} trend="up" sx={{ height: '100%' }} value="15" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <HealthStatus status={'UP'} trend="down" sx={{ height: '100%' }} value="1.6k" />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic initialChartSeries={[63, 15, 22]} labels={['New', 'In Progress', 'Done']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestIncidents
          orders={[
            {
              id: 'INC-010',
              shortDescription: 'Incident 10',
              AppName: 'App 10',
              status: 'inProgress',
              priority: 'high',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-011',
              shortDescription: 'Incident 11',
              AppName: 'App 14',
              status: 'closed',
              priority: 'medium',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-012',
              shortDescription: 'Incident 12',
              AppName: 'App 21',
              status: 'inProgress',
              priority: 'low',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-013',
              shortDescription: 'Incident 13',
              AppName: 'App 35',
              status: 'toDo',
              priority: 'medium',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-014',
              shortDescription: 'Incident 14',
              AppName: 'App 90',
              status: 'closed',
              priority: 'high',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-015',
              shortDescription: 'Incident 15',
              AppName: 'App 100',
              status: 'toDo',
              priority: 'low',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
