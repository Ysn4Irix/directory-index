const multer = require('multer')
const { join, extname } = require('path')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, join(__dirname, '../uploads'))
	},
	filename: (req, file, cb) => {
		cb(
			null,
			`${file.originalname
				.split('.')[0]
				.toLowerCase()}-${Date.now()}${extname(file.originalname)}`
		)
	}
})

module.exports = multer({ storage })
