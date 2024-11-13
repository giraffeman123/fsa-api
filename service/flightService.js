const mysql = require("../database/mysql");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getAirportWithMostMovement = async (req, res) => {
    try {

        var year = req.query.year === undefined ? '' : req.query.year;        
        const queryRes = await mysql.doQuery(`CALL sp_get_airport_with_most_movement(?);`, [year]);                       
        
        return queryRes[0];
    } catch (err) {
        //console.log(err);        
        throw err;
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getAirlineWithMostFlights = async (req, res) => {
    try {

        var year = req.query.year === undefined ? '' : req.query.year;        
        const queryRes = await mysql.doQuery(`CALL sp_get_airline_with_most_flights(?);`, [year]);       

        return queryRes[0];
    } catch (err) {
        //console.log(err);        
        throw err;
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getDayWithMostFlights = async (req, res) => {
    try {
        var year = req.query.year === undefined ? '' : req.query.year;        

        const queryRes = await mysql.doQuery(`CALL sp_get_day_with_most_flights(?);`, [year]);       
        
        return queryRes[0];
    } catch (err) {
        //console.log(err);        
        throw err;
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getAirlinesWithMoreThan2Flights = async (req, res) => {
    try {        
        const queryRes = await mysql.doQuery(`CALL sp_get_airlines_with_more_than_2flights();`, []);       
        
        return queryRes[0];
    } catch (err) {
        //console.log(err);        
        throw err;
    }
};


module.exports = {
    getAirportWithMostMovement,
    getAirlineWithMostFlights,
    getDayWithMostFlights,
    getAirlinesWithMoreThan2Flights
};
  

