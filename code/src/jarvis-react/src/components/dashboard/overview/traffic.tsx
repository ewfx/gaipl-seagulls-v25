'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import type { ApexOptions } from 'apexcharts';

import { Chart } from '@/components/core/chart';

export interface TrafficProps {
  initialChartSeries?: number[]; // Make it optional
  labels: string[];
  sx?: SxProps;
}

export function Traffic({ initialChartSeries = [0, 0, 0], labels, sx }: TrafficProps): React.JSX.Element {
  const [days, setDays] = React.useState(7);
  const [chartSeries, setChartSeries] = React.useState<number[]>(initialChartSeries); // Ensure default value

  const chartOptions = useChartOptions(labels);

  const updateData = (days: number) => {
    const newData = days === 7 ? [40, 35, 25] : days === 30 ? [50, 30, 20] : [60, 25, 15];
    setChartSeries(newData);
  };

  const handleDaysChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newDays = event.target.value as number;
    setDays(newDays);
    updateData(newDays);
  };

  return (
    <Card sx={sx}>
      <CardHeader title="Incident counts" />
      <CardContent>
        <Stack spacing={2}>
          {/* Dropdown for Days Filter */}
          <Select value={days} onChange={handleDaysChange} size="small" sx={{ width: 150, alignSelf: 'center' }}>
            <MenuItem value={7}>Last 7 Days</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
            <MenuItem value={90}>Last 90 Days</MenuItem>
          </Select>

          {/* Ensure chartSeries is defined before mapping */}
          {chartSeries?.length > 0 ? (
            <Chart height={300} options={chartOptions} series={chartSeries} type="donut" width="100%" />
          ) : (
            <Typography align="center" color="text.secondary">
              No data available
            </Typography>
          )}

          {/* <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            {chartSeries?.map((item, index) => {
              const label = labels[index];

              // return (
              //   <Stack key={label} spacing={1} sx={{ alignItems: 'center' }}>
              //     <Typography variant="h6">{label}</Typography>
              //     <Typography color="text.secondary" variant="subtitle2">
              //       {item}%
              //     </Typography>
              //   </Stack>
              // );
            })}
          </Stack> */}
        </Stack>
      </CardContent>
    </Card>
  );
}

function useChartOptions(labels: string[]): ApexOptions {
  return {
      chart: { background: 'transparent' },
      colors: ['#007bff', '#28a745', '#ff5733'], // Blue, Green, Orange
      dataLabels: { 
        enabled: true, 
        formatter: (val) => `${val.toFixed(1)}%` 
      },
      labels,
      legend: { show: true, position: 'bottom' },
      plotOptions: { 
        pie: { 
          expandOnClick: true, 
          donut: { size: '50%' } 
        }
      },
      stroke: { width: 1 },
      theme: { mode: 'light' }, 
      tooltip: { fillSeriesColor: false },
    };
  }
