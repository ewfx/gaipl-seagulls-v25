"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TreeGraph = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data) {
      console.warn("❌ No data received for TreeGraph!");
      return;
    }

    console.log("✅ Received data for TreeGraph:", data);

    const margin = { top: 50, right: 50, bottom: 50, left: 100 };
    const width = 800;
    const baseHeight = 600;

    d3.select(svgRef.current).selectAll("*").remove();

    const root = d3.hierarchy(data);
    const treeLayout = d3.tree().size([width - margin.left - margin.right, baseHeight - margin.top - margin.bottom]);
    treeLayout(root);

    // 🛠 Fix: Adjust height dynamically based on the tree depth
    const calculatedHeight = Math.max(baseHeight, root.height * 120);
    d3.select(svgRef.current).attr("height", calculatedHeight + margin.top + margin.bottom);

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // 🎨 Define Colors for Each Level
    const getNodeColor = (depth, health) => {
      if (depth === 0) return "purple"; // L4
      if (depth === 1) return "blue"; // L3
      if (depth === 2) return "green"; // L2

      // 🎯 Apply health-based colors for L1 nodes
      if (depth === 3) {
        if (health === "up") return "green"; // ✅ Up
        if (health === "down") return "red"; // ❌ Down
        return "orange"; // ⚠ Amber
      }

      return "gray"; // Default
    };

    // 🎯 Define Icons for Health Status
    const getStatusIcon = (health) => {
      if (health === "up") return "✔️"; // ✅ Right Tick
      if (health === "down") return "❌"; // ❌ Cross
      return "⚠"; // ⚠ Warning
    };

    // 🎯 Define Tooltip Messages
    const getTooltipMessage = (health) => {
      if (health === "up") return "All systems under this App ID are up and running.";
      if (health === "down") return "One or more systems under this App ID are down.";
      return "One or more systems under this App ID are underperforming.";
    };

    // Create Tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("padding", "5px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "4px")
      .style("box-shadow", "2px 2px 5px rgba(0,0,0,0.2)")
      .style("font-size", "12px")
      .style("visibility", "hidden");

    // 🛠 Render Links
    svg
      .selectAll(".link")
      .data(root.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal().x((d) => d.y).y((d) => d.x))
      .attr("fill", "none")
      .attr("stroke", "#ccc");

    // 🛠 Render Nodes with Colors (Including Health-Based for L1)
    svg
      .selectAll(".node")
      .data(root.descendants())
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("cx", (d) => d.y)
      .attr("cy", (d) => d.x)
      .attr("r", 8)
      .attr("fill", (d) => getNodeColor(d.depth, d.data.health));

    // 🛠 Render Labels
    svg
      .selectAll(".label")
      .data(root.descendants())
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => d.y + 10)
      .attr("y", (d) => d.x)
      .attr("dy", "0.35em")
      .text((d) => d.data.name)
      .attr("font-size", "12px");

    // 🎯 Render Health Icons with Tooltip for L1 Nodes
    svg
      .selectAll(".status-icon")
      .data(root.descendants().filter((d) => d.depth === 3)) // Only for L1 nodes
      .enter()
      .append("text")
      .attr("class", "status-icon")
      .attr("x", (d) => d.y + 40) // Adjust position
      .attr("y", (d) => d.x)
      .attr("dy", "0.35em")
      .text((d) => getStatusIcon(d.data.health))
      .attr("font-size", "16px")
      .style("cursor", "pointer")
      .on("mouseover", (event, d) => {
        tooltip
          .html(getTooltipMessage(d.data.health))
          .style("visibility", "visible")
          .style("top", `${event.pageY - 10}px`)
          .style("left", `${event.pageX + 10}px`);
      })
      .on("mousemove", (event) => {
        tooltip.style("top", `${event.pageY - 10}px`).style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });

    console.log("✅ TreeGraph Rendered Successfully with Health Icons & Tooltips!");

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default TreeGraph;
