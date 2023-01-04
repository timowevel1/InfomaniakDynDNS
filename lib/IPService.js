const axios = require("axios");
const writeLog = require("./LogService");

/*
Acquiring public IPv4 using the checkip service from AWS
 */
const getIP = async () => {
    const url = "https://checkip.amazonaws.com/";
    const response = await axios(url);
    const ip = response.data.trim();
    writeLog("Received IP " + ip);
    return ip;
}

module.exports = getIP;