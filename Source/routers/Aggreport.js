const express = require('express')
const Report = require('../models/report')
const mongoose = require('mongoose')
const router = new express.Router()

// Create a new request 
router.post('/reports', async (req, res)=>{
    const data = req.body.reportDetails
    
    const report = await Report.findOne({marketID: data.marketID, cmdtyID: data.cmdtyID})
    const report2 = new Report({cmdtyName: data.cmdtyName, cmdtyID: data.cmdtyID, marketID: data.marketID,
    marketName: data.marketName, users: [data.userID], price: data.price/data.convFctr})
     console.log(report)
        
    if(!report){
        try {
            await report2.save()
            res.status(201).send({status: "success", reportID: report2._id})
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
        console.log(report)
        console.log('Not found')
    } else{
        console.log('found')
        
        report.price = (report.price*(report.users.length)+(data.price/data.convFctr))/(report.users.length+1)
        report.users = report.users.concat(data.userID)  
        console.log(report)
        try {
            await report.save()
            res.status(201).send({status: "success", reportID: report._id})
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    }

    
})

// Get Aggregated report by id present in the database 
router.get('/reports', async (req, res)=>{
    const _id = req.query 
    console.log(_id)
    try {
        const report = await Report.findOne({_id:_id.reportID})
        if(!report){
            return res.status(404).send()
        }
        res.send(report)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router