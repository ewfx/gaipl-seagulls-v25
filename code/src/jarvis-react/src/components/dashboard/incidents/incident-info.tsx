'use client';

import * as React from 'react';
import { useState } from 'react';
import { Box, Card, CardContent, CardHeader, Button, Stack, Typography, Stepper, Step, StepLabel } from '@mui/material';

interface Incident {
  id: string;
  title: string;
  description: string;
  status: string;
  severity: string;
  reportedBy: string;
  createdAt: string;
}

const steps = ['Analyzed', 'Recommended', 'Approved', 'Executed', 'Validated', 'Resolved'];

export function IncidentDetails(): React.JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(2); // Example: Initially in 'Approved' stage
  const [incident, setIncident] = useState<Incident>({
    id: 'INC12345',
    title: 'Database Latency Issue',
    description: 'High latency detected in database queries, affecting application performance.',
    status: 'Pending Approval',
    severity: 'High',
    reportedBy: 'John Doe',
    createdAt: '2025-03-22 10:15 AM',
  });

  const handleApprove = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    setIncident({ ...incident, status: 'Approved' });
  };

  const handleApproveAndRun = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 2, steps.length - 1));
    setIncident({ ...incident, status: 'Executing' });
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      {/* Progress Tracker */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Incident Details */}
      <Card sx={{ mt: 3 }}>
        <CardHeader title="Incident Details" />
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h6">{incident.title}</Typography>
            <Typography variant="body1" color="text.secondary">{incident.description}</Typography>
            <Typography><strong>Status:</strong> {incident.status}</Typography>
            <Typography><strong>Severity:</strong> {incident.severity}</Typography>
            <Typography><strong>Reported By:</strong> {incident.reportedBy}</Typography>
            <Typography><strong>Created At:</strong> {incident.createdAt}</Typography>
          </Stack>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" onClick={handleApprove}>
          Approve
        </Button>
        <Button variant="contained" color="secondary" onClick={handleApproveAndRun}>
          Approve & Run
        </Button>
      </Stack>
    </Box>
  );
}
