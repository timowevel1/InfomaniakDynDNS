require("dotenv").config();
const updateDNS = require("./lib/DNSService");
const writeLog = require("./lib/LogService");

writeLog("Infomaniak DynDNS successfully started.");

/*
Run DNS Update in provided interval
 */
setInterval(() => updateDNS(process.env.DOMAIN),process.env.INTERVAL);