
// Create a mongoose Schema for a report
const mongoose = require('mongoose')

const ReportSchema = mongoose.Schema({
    cmdtyName:{
        type: String,
        },
    cmdtyID:{
        type: String,
        },
    marketID:{
        type: String,
        },
    marketName:{
        type: String,
        },
    users:[{
        type: String,
        }], 
    marketType:{
        },
    priceUnit:{
        type: String,
        default: 'Kg',
        },
    price:{
        type: Number,
        }
}, { timestamps: true}
)

const Report = mongoose.model('Report', ReportSchema)

module.exports = Report