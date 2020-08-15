const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema( {
    name :{
        type: String,
        required: true,
        maxlength: 15
    },

    message :{
        type: String,
        required: true,
        maxlength: 40
    }
}, { timestamps: true })

const Message = mongoose.model('addMessage', messageSchema)

module.exports = {
    Message
}