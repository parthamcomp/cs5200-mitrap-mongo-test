require('./db')();
const assert = require('assert');

const universityDao = require('./daos/university.dao.server');
const answerDao = require('./daos/answer.dao.server');
const questionDao = require('./daos/question.dao.server');
const studentDao = require('./daos/student.dao.server');





testStudentsInitialCount = () =>
{
    return studentDao.findAllStudents()
        .then(students => {
            console.log(students);
            assert.strictEqual(students.length, 2)
        });
};

testStudentsInitialCount();


testQuestionsInitialCount = () =>
{
    return questionDao.findAllQuestions()
        .then(questions => assert.strictEqual(questions.length, 4))
};

testAnswersInitialCount = () =>
{
    return answerDao.findAllAnswers()
        .then(answers => assert.strictEqual(answers.length, 8))
};

testDeleteAnswer = () =>
{

    answerDao.deleteAnswer(890)
        .then(()  =>answerDao.findAllAnswers())
        .then(answers => assert.strictEqual(answers.length, 7));
    answerDao.findAnswersByStudent(234)
        .then(answersByBob => assert.strictEqual(answersByBob.length, 3))
};

testDeleteQuestion = () =>
{
    questionDao.deleteQuestion(321)
        .then(() =>questionDao.findAllQuestions())
        .then(questions => assert.strictEqual(questions.length, 3))
};

testDeleteStudent = () =>
{
    studentDao.deleteStudent(234)
        .then(() => studentDao.findAllStudents())
        .then(students => assert.strictEqual(students.length, 1))
};

universityDao.truncateDatabase();
universityDao.populateDatabase();
    // .then (() => console.log('Database created'));
testStudentsInitialCount();
// .then( () => testQuestionsInitialCount())
// .then( () => testAnswersInitialCount())
// .then( () => testDeleteAnswer())
// .then( () => testDeleteQuestion())
// .then( () => testDeleteStudent());




