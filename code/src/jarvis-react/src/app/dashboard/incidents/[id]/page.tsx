'use client';

import { useParams } from 'next/navigation';
import { IncidentDetails } from '@/components/dashboard/incidents/incident-info';
import { Box, Typography } from '@mui/material';

export default function IncidentPage() {
  const { id } = useParams(); // Get incident ID from URL

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Incident #{id}
      </Typography>
      <IncidentDetails />
    </Box>
  );
}
