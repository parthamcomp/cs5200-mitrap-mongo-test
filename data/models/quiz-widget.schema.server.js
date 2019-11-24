const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
const quizWidgetSchema = mongoose.Schema({
    question: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
}, {collection: 'question-widgets'});

module.exports = quizWidgetSchema;