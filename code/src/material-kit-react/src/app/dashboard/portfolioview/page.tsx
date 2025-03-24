"use client";

import { useState, useEffect } from "react";
import { mockData } from "@/app/dashboard/portfolioview/data/mockData";
import TreeGraph from "@/app/dashboard/portfolioview/components/TreeGraph";
import { FormControl, InputLabel, MenuItem, Select, Box, Typography } from "@mui/material";

const PortfolioView = () => {
  const [selectedL4, setSelectedL4] = useState("");
  const [selectedL3, setSelectedL3] = useState("");
  const [selectedL2, setSelectedL2] = useState("");
  const [treeData, setTreeData] = useState(null);

  const handleL4Change = (event) => {
    setSelectedL4(event.target.value);
    setSelectedL3("");
    setSelectedL2("");
  };

  const handleL3Change = (event) => {
    setSelectedL3(event.target.value);
    setSelectedL2("");
  };

  const handleL2Change = (event) => {
    setSelectedL2(event.target.value);
  };

  // ✅ Correctly filter the tree without modifying the original data
  const filterTree = (node, selectedL3, selectedL2) => {
    if (!node || !node.subLevels) return null;

    let filteredNode = { ...node };

    if (selectedL3) {
      filteredNode.subLevels = filteredNode.subLevels
        .filter((d) => d.name === selectedL3)
        .map((d) => ({
          ...d,
          subLevels: selectedL2
            ? d.subLevels.filter((s) => s.name === selectedL2)
            : d.subLevels,
        }));
    }

    return filteredNode;
  };

  // ✅ Convert `subLevels` to `children` for D3 compatibility
  const transformData = (node) => {
  if (!node || !node.subLevels) {
    return { name: node.name, level: node.Level, health: node.health || "unknown" }; 
  }

  return {
    name: node.name,
    level: node.Level,
    health: node.health || "unknown",
    children: node.subLevels.map(transformData),
  };
};

  useEffect(() => {
    if (!selectedL4) {
      setTreeData(null);
      return;
    }

    let data = mockData.find((d) => d.name === selectedL4);
    if (!data) return;

    // ✅ Apply correct filtering logic to show only selected parts
    let filteredData = filterTree(data, selectedL3, selectedL2);
    if (!filteredData) return;

    // ✅ Convert the tree structure for D3
    const finalTree = transformData(filteredData);
    console.log("✅ Final treeData passed to TreeGraph:", finalTree);

    setTreeData(finalTree);
  }, [selectedL4, selectedL3, selectedL2]);

  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      <Typography
  variant="h4"
  gutterBottom
  sx={{
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: "60px", // Increased space between header and dropdowns
  }}
>
  Portfolio View
</Typography>


      {/* Styled Dropdowns */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
        {/* L4 Dropdown */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>L4</InputLabel>
          <Select value={selectedL4} onChange={handleL4Change}>
            <MenuItem value="">Select L4</MenuItem>
            {mockData.map((item) => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* L3 Dropdown */}
        <FormControl sx={{ minWidth: 200 }} disabled={!selectedL4}>
          <InputLabel>L3</InputLabel>
          <Select value={selectedL3} onChange={handleL3Change}>
            <MenuItem value="">Select L3</MenuItem>
            {selectedL4 &&
              mockData
                .find((item) => item.name === selectedL4)
                ?.subLevels.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>

        {/* L2 Dropdown */}
        <FormControl sx={{ minWidth: 200 }} disabled={!selectedL3}>
          <InputLabel>L2</InputLabel>
          <Select value={selectedL2} onChange={handleL2Change}>
            <MenuItem value="">Select L2</MenuItem>
            {selectedL3 &&
              mockData
                .find((item) => item.name === selectedL4)
                ?.subLevels.find((item) => item.name === selectedL3)
                ?.subLevels.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </Box>

      {/* Tree Graph */}
      {treeData && <TreeGraph data={treeData} />}
    </Box>
  );
};

export default PortfolioView;
