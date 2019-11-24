const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');
const studentModel = require('../models/student.model.server');
const {answerQuestion} = require("./answer.dao.server");
const {createQuestion} = require("./question.dao.server");
const {createStudent} = require("./student.dao.server");

populateDatabase = () => {
	const alice = {
		_id: 123,
		firstName: 'Alice',
		lastName: 'Wonderland',
		username: 'alice',
		password: 'alice',
		gradYear: 2020,
		scholarship: 15000
	};
	const bob = {
		_id: 234,
		firstName: 'Bob',
		lastName: 'Hope',
		username: 'bob',
		password: 'bob',
		gradYear: 2021,
		scholarship: 12000
	};
	createStudent(alice);
	createStudent(bob);

	const quesOneTF = {
		_id: 321,
		points: 10,
		question: 'Is the following schema valid?',
		questionType: 'TRUE_FALSE',
		isTrue: false
	};
	const quesTwoTF = {
		_id: 432,
		points: 10,
		question: 'DAO stands for Dynamic Access Object.',
		questionType: 'TRUE_FALSE',
		isTrue: false
	};

	const quesThreeMCQ = {
		_id: 543,
		question: 'What does JPA stand for?',
		points: 10,
		questionType: 'MULTIPLE_CHOICE',
		choices:
			'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations',
		correct: 1
	};
	const quesFourMCQ = {
		_id: 654,
		question: 'What does ORM stand for?',
		points: 10,
		questionType: 'MULTIPLE_CHOICE',
		choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping',
		correct: 4
	};

	createQuestion(quesOneTF);
	createQuestion(quesTwoTF);
	createQuestion(quesThreeMCQ);
	createQuestion(quesFourMCQ);

	const ansAliceTFOne = {
		_id: 123,
		trueFalseAnswer: true
	};
	const ansAliceTFTwo = {
		_id: 234,
		trueFalseAnswer: false
	};
	const ansAliceMCQOne = {
		_id: 345,
		multipleChoiceAnswer: 1
	};
	const ansAliceMCQTwo = {
		_id: 456,
		multipleChoiceAnswer: 2
	};
	const ansBobTFOne = {
		_id: 567,
		trueFalseAnswer: false
	};
	const ansBobTFTwo = {
		_id: 678,
		trueFalseAnswer: true
	};
	const ansBobMCQOne = {
		_id: 789,
		multipleChoiceAnswer: 3
	};
	const ansBobMCQTwo = {
		_id: 890,
		multipleChoiceAnswer: 4
	};

	answerQuestion(123, 321, ansAliceTFOne);
	answerQuestion(123, 432, ansAliceTFTwo);
	answerQuestion(123, 543, ansAliceMCQOne);
	answerQuestion(123, 654, ansAliceMCQTwo);

	answerQuestion(234, 321, ansBobTFOne);
	answerQuestion(234, 432, ansBobTFTwo);
	answerQuestion(234, 543, ansBobMCQOne);
	answerQuestion(234, 654, ansBobMCQTwo);

	console.log('Database created');
};

truncateDatabase = () => {
	questionModel.deleteMany({}, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Questions deleted.');
		}
	});
	answerModel.deleteMany({}, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Answers deleted.');
		}
	});
	studentModel.deleteMany({}, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Students deleted.');
		}
	});
	return { status: 'All the documents have been deleted successfully.' };
};

module.exports = {
	populateDatabase,
	truncateDatabase
};
