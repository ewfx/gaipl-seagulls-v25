import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { Traffic } from '@/components/dashboard/overview/traffic';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={4} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="20" />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <TotalCustomers status={'UP'} trend="down" sx={{ height: '100%' }} value="1.6k" />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <TasksProgress sx={{ height: '100%' }} value={75.5} />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'INC-010',
              shortDescription: 'Incident 10',
              AppName: 'App 10',
              status: 'inProgress',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-011',
              shortDescription: 'Incident 11',
              AppName: 'App 14',
              status: 'closed',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-012',
              shortDescription: 'Incident 12',
              AppName: 'App 21',
              status: 'inProgress',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-013',
              shortDescription: 'Incident 13',
              AppName: 'App 35',
              status: 'toDo',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-014',
              shortDescription: 'Incident 14',
              AppName: 'App 90',
              status: 'closed',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'INC-015',
              shortDescription: 'Incident 15',
              AppName: 'App 100',
              status: 'toDo',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
