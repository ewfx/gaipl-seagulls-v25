CREATE TABLE system_connectivity (
    id SERIAL PRIMARY KEY,
    system_name VARCHAR(100) NOT NULL,        -- The system experiencing downtime
    status VARCHAR(20) CHECK (status IN ('up', 'down', 'degraded')),
    impacted_upstream TEXT,                    -- List of upstream components affected
    impacted_downstream TEXT,                  -- List of downstream components affected
    issue_detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estimated_recovery_time TIMESTAMP,         -- When the system is expected to be back
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO system_connectivity 
(system_name, status, impacted_upstream, impacted_downstream, issue_detected_at, estimated_recovery_time) 
VALUES
('Core Banking System', 'down', 
 'Authentication Service, Payment Gateway, Fraud Detection Service', 
 'ATM Network, Mobile Banking, Online Banking Portal', 
 NOW(), NOW() + INTERVAL '3 hours'),

('Payment Gateway', 'degraded', 
 'Core Banking System, External Payment Processor', 
 'E-commerce Transactions, Retail POS Terminals', 
 NOW() - INTERVAL '1 hour', NOW() + INTERVAL '1 hour'),

('Customer Support Portal', 'down', 
 'CRM Database, User Authentication', 
 'Live Chat, Ticketing System, Email Notifications', 
 NOW() - INTERVAL '30 minutes', NOW() + INTERVAL '2 hours'),

('Data Warehouse', 'down', 
 'ETL Jobs, API Data Feeds', 
 'BI Reporting, Risk Analytics, Fraud Monitoring', 
 NOW() - INTERVAL '2 hours', NOW() + INTERVAL '4 hours');

commit;

SELECT    sc.impacted_upstream,
sc.impacted_downstream,
i.inc_number,
i.priority,
i.status 
FROM    public.system_connectivity sc
JOIN 
incidents i 
ON sc.status = 'failure' AND i.status = 'open' 
WHERE    sc.system_name = 'payment_gateway';

CREATE OR REPLACE FUNCTION notify_incident_changes()
RETURNS TRIGGER AS $$
BEGIN
    -- Sending a notification with table name, operation type, and row data
    PERFORM pg_notify(
        'incident_event',
        json_build_object(
            'operation', TG_OP,
            'data', row_to_json(NEW)
        )::text
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_incident_changes
AFTER INSERT OR UPDATE
ON public.incidents
FOR EACH ROW
EXECUTE FUNCTION notify_incident_changes();
