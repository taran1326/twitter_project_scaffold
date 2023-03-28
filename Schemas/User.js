//template schema has been given for help, please define properties for the given
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      
    },
    email: {
   
    },
    name: {
       
    },
    password: {

    },
    phone: {

    }

})

module.exports = mongoose.model('tb_user', userSchema);



