const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getNumberOfAnsweredAndUnansweredQuestions = async (req, res) => {
    try {        
        const apiRes = await axios.get(process.env.ANSWER_ENDPOINT);
        const items = apiRes.data.items;

        var result = {
			answeredQuestions : 0,
			unAnsweredQuestions : 0
		};

        const answeredQuestions = items.filter((item) => item.is_answered == true);
        const unAnsweredQuestions = items.filter((item) => item.is_answered == false);

        result.answeredQuestions = answeredQuestions.length;
		result.unAnsweredQuestions = unAnsweredQuestions.length;
        
        return result;
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
const getAnswerWithBetterReputation = async (req, res) => {
    try {        
        const apiRes = await axios.get(process.env.ANSWER_ENDPOINT);        
        const items = apiRes.data.items;

        let answerWithBetterReputation = items.reduce((max, item) => max.owner.reputation > item.owner.reputation ? max : item);

        return answerWithBetterReputation;
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
const getAnswerWithLessAmountOfVisits = async (req, res) => {
    try {        
        const apiRes = await axios.get(process.env.ANSWER_ENDPOINT);
        const items = apiRes.data.items;
        
        let answerWithLessAmountOfVisits = items.reduce((min, item) => min.view_count < item.view_count ? min : item);

        return answerWithLessAmountOfVisits;
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
const getOldestAndNewestAnswer = async (req, res) => {
    try {        
        const apiRes = await axios.get(process.env.ANSWER_ENDPOINT);
        const items = apiRes.data.items;
        
        var result = {
			oldestAnswer : {},
			newestAnswer : {}
		};

        let oldestAnswer = items.reduce((min, item) => min.creation_date < item.creation_date ? min : item);
        let newestAnswer = items.reduce((max, item) => max.creation_date > item.creation_date ? max : item);

        result.oldestAnswer = oldestAnswer;
		result.newestAnswer = newestAnswer;
        
        return result;
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
const get2To5AnswerList = async (req, res) => {
    try {        
        const apiRes = await axios.get(process.env.ANSWER_ENDPOINT);
        const items = apiRes.data.items;
        
        const items2To5 = items.slice(1,5);
        return items2To5;
    } catch (err) {
        //console.log(err);        
        throw err;
    }
};


module.exports = {
    getNumberOfAnsweredAndUnansweredQuestions,
    getAnswerWithBetterReputation,
    getAnswerWithLessAmountOfVisits,
    getOldestAndNewestAnswer,
    get2To5AnswerList    
};
  

