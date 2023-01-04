const axios = require('axios');
const getIP = require("./IPService");
const writeLog = require("./LogService");

/*
Changing the A Host of the provided domain with the current public IP using the Infomaniak API
https://www.infomaniak.com/en/support/faq/2376/dyndns-updating-a-dynamic-dns-via-the-api
 */

const updateDNS = async (domain) => {
    const ipv4 = await getIP();
    axios.post(`https://infomaniak.com/nic/update?hostname=${domain}&myip=${ipv4}&username=${process.env.USERNAME}&password=${encodeURIComponent(process.env.PASSWORD)}`)
        .then((response) => {
            writeLog("Updated IP to " + ipv4);
        });
}

module.exports = updateDNS;