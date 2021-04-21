const mongoose = require('mongoose')

// Connect to local database using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Price-report', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})