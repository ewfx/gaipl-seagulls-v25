"use client"; // Needed for React state in Next.js App Router
import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Grid, Paper, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Metrics = () => {
  // Mock data for incidents (Pie Charts)
  const pieData = {
    labels: ["Incidents Created", "Incidents Self-Healed", "Manual Intervention"],
    datasets: [
      {
        data: [40, 35, 25], // Mock values
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Mock data for the donut chart (Incident Resolution)
  const donutData = {
    labels: ["Resolved Automatically", "Resolved Manually"],
    datasets: [
      {
        data: [60, 40], // Mock values
        backgroundColor: ["#4CAF50", "#FF9800"],
        cutout: "50%", // Makes it a donut chart
      },
    ],
  };

  // Mock data for the bar chart
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Incidents Over Time",
        data: [10, 15, 20, 25, 18, 22], // Mock values
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Top Section - Two Pie Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Incident Distribution
            </Typography>
            <Pie data={pieData} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Incident Resolution
            </Typography>
            <Pie data={donutData} />
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom Section - Bar Chart */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Incidents Over Time
            </Typography>
            <Bar data={barData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Metrics;
