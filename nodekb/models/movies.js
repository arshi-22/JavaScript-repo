let mongoose = require('mongoose');

let movieschema = mongoose.Schema({
    title:{
        type :String,
        requried : true
    },
    type:{
        type: String,
        required : true
    },
    body:{
        type: String,
        required : true
    },
    
});

let Movie = module.exports = mongoose.model('Movie',movieschema);