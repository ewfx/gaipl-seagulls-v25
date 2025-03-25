const pool = require("../config/db");

const getApplicationDetails = async (req, res) => {
    const { appName } = req.params;

    try {
        // Fetch application details
        const appResult = await pool.query(
            'SELECT app_name, health, type, business_impact FROM applications WHERE app_name = $1',
            [appName]
        );

        if (appResult.rows.length === 0) {
            return res.status(404).json({ error: 'Application not found' });
        }

        const appDetails = appResult.rows[0];

        // Fetch upstream dependencies
        const upstreamResult = await pool.query(
            `SELECT dependent_app_name AS appName, health, type, business_impact 
             FROM dependencies WHERE app_name = $1 AND relationship_type = 'upstream'`,
            [appName]
        );

        // Fetch downstream dependencies
        const downstreamResult = await pool.query(
            `SELECT dependent_app_name AS appName, health, type, business_impact 
             FROM dependencies WHERE app_name = $1 AND relationship_type = 'downstream'`,
            [appName]
        );

        res.json({
            appName: appDetails.app_name,
            health: appDetails.health,
            type: appDetails.type,
            businessImpact: appDetails.business_impact,
            upstreams: upstreamResult.rows,
            downstreams: downstreamResult.rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getApplicationDetails };