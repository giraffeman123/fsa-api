
const modules = require("../service/modules");

const requestIp = require('request-ip');
const { getIpv4 } = require('./../utils/ipUtils');

const getAirportWithMostMovement = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = 'year='+req.query.year;

    try {
        var dbResponse = await modules.flightService.getAirportWithMostMovement(req);
        res.status(200).json(dbResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "flightController", method: "getAirportWithMostMovement", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};

const getAirlineWithMostFlights = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = 'year='+req.query.year;

    try {
        
        var dbResponse = await modules.flightService.getAirlineWithMostFlights(req);
        res.status(200).json(dbResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "flightController", method: "getAirlineWithMostFlights", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};

const getDayWithMostFlights = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = 'year='+req.query.year;

    try {
        
        var dbResponse = await modules.flightService.getDayWithMostFlights(req);
        res.status(200).json(dbResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "flightController", method: "getDayWithMostFlights", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};

const getAirlinesWithMoreThan2Flights = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = '';

    try {        
        const dbResponse = await modules.flightService.getAirlinesWithMoreThan2Flights(req);
        res.status(200).json(dbResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "flightController", method: "getAirlinesWithMoreThan2Flights", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};


module.exports = {
    getAirportWithMostMovement,
    getAirlineWithMostFlights,
    getDayWithMostFlights,
    getAirlinesWithMoreThan2Flights
};
