
const tokenSchema = new Schema({
    userId : {

    },

    tokens:{
    
    }
})

module.exports = mongoose.model('tb_tokens', tokenSchema);