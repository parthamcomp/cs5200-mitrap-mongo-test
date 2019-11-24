const mongoose = require("mongoose");
module.exports = function(){
    mongoose.connect('mongodb://localhost:27017/white-board', { useNewUrlParser: true })
            .then(r => console.log("Connected!" + r));
};