const mongoose = require('mongoose')

const projectdetailSchema = new mongoose.Schema({

    projectname: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ProjectDetail',projectdetailSchema)