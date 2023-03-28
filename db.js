const mongoose = require('mongoose')

const app = require('./index');
const dbUri = "mongodb://0.0.0.0:27017/TwitterDB";   // this remains constant , connect to dbUri using mongoose.


try{
    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
    })
    .catch((error) => {
    });
}catch(err){
    console.log(err.message);
}