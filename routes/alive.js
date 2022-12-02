const router = require('express').Router()

const { alive } = require('../controllers/index.controller')

router.get('/', alive)

module.exports = { router }
