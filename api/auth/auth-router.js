const express = require('express')

const router = express.Router()

router.post('/register', async (req, res, next) => {
    res.json({ message: 'register is working' })
})
router.post('/login', async (req, res, next) => {
    res.json({ message: 'login is working' })
})
router.get('/logout', async (req, res, next) => {
    res.json({ message: 'logout is working' })
})

module.exports = router