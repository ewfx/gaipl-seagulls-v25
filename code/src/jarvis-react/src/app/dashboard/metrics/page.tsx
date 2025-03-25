'use client';

import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Grid, Paper, Typography, Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Metrics = () => {
  // Pie and Donut data (unchanged)
  const pieData = {
    labels: ['Incidents Created', 'Incidents Self-Healed', 'Manual Intervention'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#D32F2F', '#FFCA28', '#81D4FA'],
        hoverBackgroundColor: ['#B71C1C', '#FFB300', '#4FC3F7'],
      },
    ],
  };

  const donutData = {
    labels: ['Resolved Automatically', 'Resolved Manually'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#4CAF50', '#FF9800'],
        hoverBackgroundColor: ['#388E3C', '#FB8C00'],
        cutout: '50%',
      },
    ],
  };

  // Enhanced Bar Graph Data and Options
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Incidents Over Time',
        data: [10, 15, 20, 25, 18, 22],
        backgroundColor: 'rgba(54, 162, 235, 0.7)', // Slightly transparent blue
        hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
        borderRadius: 5, // Rounded corners for bars
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light gridlines
        },
        ticks: {
          color: '#555', // Darker axis labels
        },
      },
      x: {
        grid: {
          display: false, // Remove x-axis gridlines
        },
        ticks: {
          color: '#555',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333', // Darker legend labels
        },
      },
    },
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#FAFAFA' }}>
      <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
        System Metrics
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: 3, textAlign: 'center', borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={500} gutterBottom>
              Incident Distribution
            </Typography>
            <Pie data={pieData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: 3, textAlign: 'center', borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={500} gutterBottom>
              Incident Resolution
            </Typography>
            <Pie data={donutData} />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: 3 }}>
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ padding: 3, textAlign: 'center', borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={500} gutterBottom>
              Incidents Over Time
            </Typography>
            <Bar data={barData} options={barOptions} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Metrics;