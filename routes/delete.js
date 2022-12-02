const router = require('express').Router()

const { deleteFile } = require('../controllers/upload.controller')

router.get('/:filename', deleteFile)

module.exports = { router }
