const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetsSchema = new Schema({
    title: {
       
    },

    bodyText: {
       
    },
    userId: {
       
    },
    creationDatetime: {
        
    }
});

module.exports = mongoose.model('tb_tweets', TweetsSchema);
