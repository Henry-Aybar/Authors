const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    //name,
   name:{
        type: String,
        required: [true, "You need a Name!"],
        minLength: [3, "You need at leat 3 Characters!!"]
    },

}, {timestamps:true})

const Author = mongoose.model("Author",AuthorSchema);

module.exports = Author;