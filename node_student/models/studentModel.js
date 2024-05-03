const mongoose = require("mongoose");

const Student = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    roll_no : {
        type : Number,
        required : true,
        unique : true,
    },
    wad_marks : {
        type : Number,
        required : true,
    },
    cc_marks : {
        type : Number,
        required : true,
    },
    cns_marks : {
        type : Number,
        required : true,
    },
})

const Stud = mongoose.model("students",Student);

module.exports = Stud;