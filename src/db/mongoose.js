const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
const connectionURL= 'mongodb+srv://admin:admin@cluster0-ed9b9.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
