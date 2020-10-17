const router = require('express').Router()

router.get('/api/users', (req, res) => {
    res.send("Hello It works")
})

module.exports = router