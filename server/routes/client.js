const { Router } = require('express')
const router = Router()

const Client = require('../../models').client

router.post('/get', async (req, res, next) => {
  const iClientID = req.body.iClientID || false
  const response = await Client.get({ iClientID })
  res.json(response)
})

module.exports = router
