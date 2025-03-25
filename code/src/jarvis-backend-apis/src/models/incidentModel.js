const pool = require("../config/db");

const getAllIncidents = async () => {
  const result = await pool.query("SELECT * FROM incidents");
  return result.rows;
};

const getIncidentById = async (inc_number) => {
  const result = await pool.query("SELECT * FROM incidents WHERE inc_number = $1", [inc_number]);
  return result.rows[0];
};

const createIncident = async (incident) => {
  const { inc_number, short_summary, created_date, status, app_name, priority, resolved_date, recommended_solution, comments, rcasummary } = incident;
  const result = await pool.query(
    "INSERT INTO incidents (inc_number, short_summary, created_date, status, app_name, priority, resolved_date, recommended_solution, comments, rcasummary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
    [inc_number, short_summary, created_date, status, app_name, priority, resolved_date, recommended_solution, comments, rcasummary]
  );
  return result.rows[0];
};

// ✅ Partial Update Support: Update only the provided fields
const updateIncident = async (inc_number, incident) => {
  const current = await pool.query("SELECT * FROM incidents WHERE inc_number = $1", [inc_number]);
  if (current.rows.length === 0) {
    return null; // Incident not found
  }

  const fields = Object.keys(incident);
  if (fields.length === 0) return current.rows[0]; // No fields to update

  const values = Object.values(incident);
  values.push(inc_number); // Add inc_number as the last parameter for WHERE condition

  const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  const query = `UPDATE incidents SET ${setClause} WHERE inc_number = $${fields.length + 1} RETURNING *`;

  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteIncident = async (inc_number) => {
  await pool.query("DELETE FROM incidents WHERE inc_number = $1", [inc_number]);
  return { message: "Incident deleted" };
};

module.exports = { getAllIncidents, getIncidentById, createIncident, updateIncident, deleteIncident };
