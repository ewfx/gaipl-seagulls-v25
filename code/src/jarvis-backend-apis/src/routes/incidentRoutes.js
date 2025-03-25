const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incidentController");

router.get("/", incidentController.getIncidents);
router.get("/:inc_number", incidentController.getIncident);
router.post("/", incidentController.createIncident);
router.put("/:inc_number", incidentController.updateIncident);
router.delete("/:inc_number", incidentController.deleteIncident);

module.exports = router;
