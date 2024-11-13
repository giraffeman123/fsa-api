
const modules = require("../service/modules");

const requestIp = require('request-ip');
const { getIpv4 } = require('./../utils/ipUtils');

const getNumberOfAnsweredAndUnansweredQuestions = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = '';

    try {        
        const apiResponse = await modules.answerService.getNumberOfAnsweredAndUnansweredQuestions(req);
        res.status(200).json(apiResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "answerController", method: "getNumberOfAnsweredAndUnansweredQuestions", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};

const getAnswerWithBetterReputation = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = '';

    try {        
        const apiResponse = await modules.answerService.getAnswerWithBetterReputation(req);
        res.status(200).json(apiResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "answerController", method: "getAnswerWithBetterReputation", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};

const getAnswerWithLessAmountOfVisits = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = '';

    try {        
        const apiResponse = await modules.answerService.getAnswerWithLessAmountOfVisits(req);
        res.status(200).json(apiResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "answerController", method: "getAnswerWithLessAmountOfVisits", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};

const getOldestAndNewestAnswer = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = '';

    try {        
        const apiResponse = await modules.answerService.getOldestAndNewestAnswer(req);
        res.status(200).json(apiResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "answerController", method: "getOldestAndNewestAnswer", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};


const get2To5AnswerList = async (req, res) => {

    var clientIp = req.get('x-original-forwarded-for') !== undefined ? getIpv4(req.get('x-original-forwarded-for')) : getIpv4(requestIp.getClientIp(req));
    var cleanIp = clientIp !== null ? clientIp : 'Ip Retrieval Error';
    var paramStr = '';

    try {        
        const apiResponse = await modules.answerService.get2To5AnswerList(req);
        res.status(200).json(apiResponse);
    } catch (err) {
        console.log(JSON.stringify({ class: "answerController", method: "get2To5AnswerList", parameters: paramStr, errorCode: "500", clientIpv4: cleanIp, error: err.stack }));        
        return res.status(500).json({"resultado": -1, "descripcion": err.stack});
    }
};


module.exports = {
    getNumberOfAnsweredAndUnansweredQuestions,
    getAnswerWithBetterReputation,
    getAnswerWithLessAmountOfVisits,
    getOldestAndNewestAnswer,
    get2To5AnswerList
};
