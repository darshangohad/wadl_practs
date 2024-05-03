const mongoose = require("mongoose");

const Music_DB = new mongoose.Schema({
    song_name : {
        type : String,
        required : true,
    },
    film_name : {
        type : String,
        required : true,
    },
    music_dir :{
        type : String,
        required : true,
    },
    singer :{
        type : String,
        required : true,
    },
    actor:{
        type : String,
        required : true,
    },
    actress :{
        type : String,
        required : true,
    },
})

const music = mongoose.model("music_db",Music_DB);
module.exports = music;