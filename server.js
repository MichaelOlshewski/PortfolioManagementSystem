const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/client/public/index.html"))
})

app.listen(PORT, () => {
    console.log("========================================")
    console.log(`Server has started running on port: ${PORT}`)
    console.log("========================================")
})