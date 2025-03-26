'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const statusMap = {
  InProgress: { label: 'In-progress', color: '#ff9800' },
  Resolved: { label: 'Closed', color: '#4caf50' }, 
  Open: { label: 'To-Do', color: '#f44336' },
} as const;

const priorityMap = {
  Low: { label: 'Low', color: '#4caf50' },
  Medium: { label: 'Medium', color: '#ff9800' },
  High: { label: 'High', color: '#f44336' },
} as const;

interface Incident {
  inc_number: string;
  short_summary: string;
  app_name: string;
  created_date: string;
  status: 'In Progress' | 'Resolved' | 'Open';
  priority: 'Low' | 'Medium' | 'High';
}

export function LatestIncidents(): React.JSX.Element {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchIncidents() {
      try {
        const response = await fetch('http://localhost:8080/api/incidents');
        if (!response.ok) throw new Error('Failed to fetch incidents');
        const data: Incident[] = await response.json();
        setIncidents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchIncidents();
  }, []);

  return (
    <Card>
      <CardHeader title="Incident Status" />
      <Divider />
      <Box sx={{ overflowX: 'auto', minHeight: 200 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Incident Number</TableCell>
                <TableCell>Short description</TableCell>
                <TableCell>App Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incidents.map((incident) => {
                const status = statusMap[incident.status] ?? { label: 'Unknown', color: 'default' };
                const priority = priorityMap[incident.priority] ?? { label: 'Unknown', color: 'default' };

                return (
                  <TableRow hover key={incident.inc_number}>
                    <TableCell>
                      <Link href={`/dashboard/incidents/${incident.inc_number}`} passHref>
                        {incident.inc_number}
                      </Link>
                    </TableCell>
                    <TableCell>{incident.short_summary}</TableCell>
                    <TableCell>{incident.app_name}</TableCell>
                    <TableCell>{dayjs(incident.created_date).format('MMM D, YYYY')}</TableCell>
                    <TableCell>
                      <Chip label={priority.label}
                        size="small"
                        sx={{ backgroundColor: priority.color, color: '#fff' }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip label={status.label}
                        size="small"
                        sx={{ backgroundColor: status.color, color: '#fff' }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        {/* Add a "View All" button if needed */}
      </CardActions>
    </Card>
  );
}