const express = require("express");
const router = express.Router();
const answerController = require("../controller/answerController");
const validate = require('./validate');

/**Login */
router.route('/answered-and-unanswered').get([], answerController.getNumberOfAnsweredAndUnansweredQuestions);
router.route('/better-reputation').get([], answerController.getAnswerWithBetterReputation);
router.route('/less-amount-of-visits').get([], answerController.getAnswerWithLessAmountOfVisits);
router.route('/oldest-and-newest').get([], answerController.getOldestAndNewestAnswer);
router.route('/two-to-five').get([], answerController.get2To5AnswerList);

module.exports = router
