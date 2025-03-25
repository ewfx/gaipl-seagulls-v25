const Incident = require("../models/incidentModel");

exports.getIncidents = async (req, res) => {
  const incidents = await Incident.getAllIncidents();
  res.json(incidents);
};

exports.getIncident = async (req, res) => {
  const incident = await Incident.getIncidentById(req.params.inc_number);
  incident ? res.json(incident) : res.status(404).json({ message: "Incident not found" });
};

exports.createIncident = async (req, res) => {
  const newIncident = await Incident.createIncident(req.body);
  res.status(201).json(newIncident);
};

// ✅ Partial Update (PUT that behaves like PATCH)
exports.updateIncident = async (req, res) => {
  const updatedIncident = await Incident.updateIncident(req.params.inc_number, req.body);
  updatedIncident ? res.json(updatedIncident) : res.status(404).json({ message: "Incident not found" });
};

exports.deleteIncident = async (req, res) => {
  await Incident.deleteIncident(req.params.inc_number);
  res.json({ message: "Incident deleted" });
};
