const express = require('express')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router.use(authMiddleware)

router.get('/queryOrderWaitTime', (req, res) => {
  const waitTime = Math.floor(Math.random() * 60) + 1
  res.json({ data: { queryOrderWaitTimeStatus: true, waitTime } })
})

module.exports = router