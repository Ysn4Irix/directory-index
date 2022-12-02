const router = require('express').Router()

const { upload } = require('../controllers/upload.controller')
const uploader = require('../middlewares/multer')

router.post('/', uploader.single('file'), upload)

module.exports = { router }
