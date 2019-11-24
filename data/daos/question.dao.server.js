const questionModel = require('../models/question.model.server');

createQuestion = (question) => questionModel.create(question);

findAllQuestions = () => questionModel.find();

findQuestionById = (questionId) => questionModel.findById(questionId);

deleteQuestion = (questionId) => questionModel.remove({ _id: questionId });

module.exports = {
	createQuestion,
	findAllQuestions,
	findQuestionById,
	deleteQuestion
};
