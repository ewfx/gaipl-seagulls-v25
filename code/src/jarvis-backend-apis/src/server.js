const express = require("express");
const cors = require("cors");
require("dotenv").config();

const incidentRoutes = require("./routes/incidentRoutes");
const applicationRoutes = require('./routes/applicationRoutes');
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/incidents", incidentRoutes);
app.use('/api', applicationRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
