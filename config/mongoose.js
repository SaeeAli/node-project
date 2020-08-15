const mongoose = require('mongoose')

const db = 'mongodb+srv://alisaee:Ali1358@node-challenge.0fint.mongodb.net/node-challenge?retryWrites=true&w=majority'
mongoose.set('useUnifiedTopology', false)

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to db'))
.catch(err => console.log(err))