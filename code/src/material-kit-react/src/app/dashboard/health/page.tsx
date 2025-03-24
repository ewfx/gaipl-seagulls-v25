"use client"; // Required for React state in Next.js App Router
import React, { useState } from "react";
import { MenuItem, Select, Typography, Paper, Box, Tooltip } from "@mui/material";
import { ArrowDownward, ArrowUpward, CheckCircle, Cancel, Warning } from "@mui/icons-material";

// Images for different system types
const typeImages: any = {
  webservice: "https://cdn-icons-png.flaticon.com/512/2833/2833637.png", // Replace with actual webservice image
  kafka: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOKEVxLEPXLVAhlOcrfBnIOTzoCU23BwUMA&s", // Replace with actual Kafka image
  redis: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkyNXpLEa-dsSw6HTshjntXcMrCnwy4We8w&s", // Replace with actual Redis image
  database: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcQJVau-Ua3WPT6EbCSGQXtyrdthvEkRgFxGRvcxKF88hzONmz9stTg59NYnDaiUJoUE&usqp=CAU", // Your provided database image
};

// Mock API response function
const fetchAppData = (appName: string) => {
  const mockResponses: any = {
    App1: {
      appName: "App1",
      health: "up",
      type: "webservice",
      businessImpact: "Online banking will not work",
      upstreams: [
        { appName: "Upstream1", health: "up", type: "database", businessImpact: "Database issue" },
        { appName: "Upstream2", health: "down", type: "redis", businessImpact: "Redis failure" },
		{ appName: "Upstream3", health: "down", type: "redis", businessImpact: "Redis failure" },
		{ appName: "Upstream4", health: "amber", type: "redis", businessImpact: "Redis failure" },
		{ appName: "Upstream5", health: "down", type: "redis", businessImpact: "Redis failure" },
		{ appName: "Upstream6", health: "down", type: "redis", businessImpact: "Redis failure" },
      ],
      downstreams: [
        { appName: "Downstream1", health: "up", type: "kafka", businessImpact: "Message delay" },
        { appName: "Downstream2", health: "up", type: "webservice", businessImpact: "Minor outage" },
      ],
    },
    App2: {
      appName: "App2",
      health: "down",
      type: "database",
      businessImpact: "User login issues",
      upstreams: [
        { appName: "UpstreamA", health: "up", type: "redis", businessImpact: "Cache issue" },
        { appName: "UpstreamB", health: "up", type: "kafka", businessImpact: "Event delay" },
      ],
      downstreams: [
        { appName: "DownstreamA", health: "down", type: "webservice", businessImpact: "Service down" },
        { appName: "DownstreamB", health: "down", type: "database", businessImpact: "Data inconsistency" },
      ],
    },
  };

  return new Promise((resolve) => setTimeout(() => resolve(mockResponses[appName]), 1000));
};

// Get health icon
const gethealthIcon = (health: string) => {
  if (health === "up") return <CheckCircle sx={{ color: "green" }} />;
  if (health === "down") return <Cancel sx={{ color: "red" }} />;
  if (health === "amber") return <Warning sx={{ color: "yellow" }} />;
  return <Warning sx={{ color: "orange" }} />;
};

const ApplicationArchitecture = () => {
  const [selectedApp, setSelectedApp] = useState<string>("");
  const [appData, setAppData] = useState<any>(null);

  const handleAppChange = async (event: any) => {
    const appName = event.target.value;
    setSelectedApp(appName);
    setAppData(null); // Reset while fetching
    const data = await fetchAppData(appName);
    setAppData(data);
  };

  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#1976D2" }}>
        Application Architecture View
      </Typography>

      {/* Styled Dropdown */}
      <Select value={selectedApp} onChange={handleAppChange} displayEmpty sx={{ width: "250px", marginBottom: "20px" }}>
        <MenuItem value="" disabled>
          Select an Application
        </MenuItem>
        <MenuItem value="App1">App1</MenuItem>
        <MenuItem value="App2">App2</MenuItem>
      </Select>

      {appData && (
        <Paper sx={{ padding: "30px", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Upstreams */}
          <Box sx={{ display: "flex", gap: "50px", marginBottom: "10px" }}>
            {appData.upstreams.map((upstream: any, index: number) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Tooltip title={`${upstream.businessImpact} | health: ${upstream.health.toUpperCase()}`}>
                  <Box>
                    <img src={typeImages[upstream.type]} alt={upstream.type} width="40" height="40" />
                    <Typography>{upstream.appName}</Typography>
                    {gethealthIcon(upstream.health)}
                  </Box>
                </Tooltip>
                <ArrowDownward sx={{ color: "gray", display: "block", margin: "0 auto" }} />
              </Box>
            ))}
          </Box>

          {/* Center Application */}
          <Paper sx={{ padding: "20px", backgroundColor: "#E3F2FD", color: "#000", fontWeight: "bold", display: "inline-block" }}>
		  <Tooltip title={`${appData.businessImpact} | health: ${appData.health.toUpperCase()}`}>
            <img src={typeImages[appData.type]} alt={appData.type} width="40" height="40" />
            <Typography>{appData.appName}</Typography>
            {gethealthIcon(appData.health)}
			</Tooltip>
          </Paper>

          {/* Downstreams */}
          <Box sx={{ display: "flex", gap: "50px", marginTop: "10px" }}>
            {appData.downstreams.map((downstream: any, index: number) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <ArrowDownward sx={{ color: "gray", marginBottom: "5px" }} />
                <Tooltip title={`${downstream.businessImpact} | health: ${downstream.health.toUpperCase()}`}>
                  <Box>
                    <img src={typeImages[downstream.type]} alt={downstream.type} width="40" height="40" />
                    <Typography>{downstream.appName}</Typography>
                    {gethealthIcon(downstream.health)}
                  </Box>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ApplicationArchitecture;
