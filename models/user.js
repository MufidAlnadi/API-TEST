// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// //1- Create a new schema
// const userSchema = new Schema({

//     firstName: {
//         type : String,
//         required : true
//     },
//     lastName: {
//         type : String,
//         required : true
//     },
//     age:{
//         type : Number,
//         required : true
//     }
//     }, {timestamp : true}
//     )

//     // 2- export the model with the schema
//     module.exports = mongoose.model('User',userSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sample_analytics = new Schema();

module.exports = mongoose.model("accounts", sample_analytics);
