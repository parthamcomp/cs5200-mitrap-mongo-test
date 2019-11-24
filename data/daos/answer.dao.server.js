const answerModel = require('../models/answer.model.server');

findAllAnswers = () => answerModel.find();

findAnswersById = (answerId) => answerModel.findById(answerId);

findAnswersByQuestion = (questionId) => answerModel.find({ question: questionId });

findAnswersByStudent = (studentId) => answerModel.find({ student: studentId });

answerQuestion = (studentId, questionId, answer) => {
	answer.student = studentId;
	answer.question = questionId;
	return answerModel.create(answer);
};

deleteAnswer = (answerId) => answerModel.remove({ _id: answerId });

module.exports = {
	findAllAnswers,
	findAnswersById,
	findAnswersByQuestion,
	findAnswersByStudent,
	deleteAnswer,
	answerQuestion
};
