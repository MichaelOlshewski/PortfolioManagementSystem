const express = require('express');
const router = express.Router();

const PortData = require('../../models/PortData')

router.get("/", (req, res) => {
    PortData.find({}, (err, data) => {
        if (err) res.send("something went wrong");
        res.json(data)
    })
})

router.post("/new", (req, res) => {
    const newPortData = new PortData({
        title: req.body.title,
        image: req.body.image,
        altTag: req.body.altTag,
        description: req.body.description,
        deployedLink: req.body.deployedLink,
        repoLink: req.body.repoLink
    })
    newPortData.save()
})

module.exports = router