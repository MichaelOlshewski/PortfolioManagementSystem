const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static("client"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(PORT, () => {
    console.log("========================================")
    console.log(`Server has started running on port: ${PORT}`)
    console.log("========================================")
})