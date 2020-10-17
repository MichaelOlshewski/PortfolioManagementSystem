const express = require('express');
const path = require('path')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())
app.use(express.static("client/build"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err;
    console.log("MongoDB Connected Successfully")
})

app.listen(PORT, () => {
    console.log("========================================")
    console.log(`Server has started running on port: ${PORT}`)
    console.log("========================================")
})