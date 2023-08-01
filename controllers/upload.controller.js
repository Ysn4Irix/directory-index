const { success, error } = require('../helpers/apiResponse')
const logger = require('../helpers/logger')
const formatBytes = require('../helpers/formatBytes')
const { unlink } = require('fs')
const { join } = require('path')

module.exports = {
	/**
	 * @param {import('@types/express').Request} req
	 * @param {import('@types/express').Response} res
	 * @returns {object} object
	 */
	upload: (req, res) => {
		const { file } = req

		try {
			res.status(200).json(
				success('🎉 File uploaded', {
					originalname: file.originalname,
					filename: file.filename,
					mimeType: file.mimetype,
					size: formatBytes(file.size)
				})
			)
		} catch (err) {
			logger.error(err.message)
			res.status(500).json(
				error(
					'Oops! We have an problem in our backend 😢',
					res.statusCode
				)
			)
		}
	},
	/**
	 * @param {import('@types/express').Request} req
	 * @param {import('@types/express').Response} res
	 * @returns {object} object
	 */
	deleteFile: (req, res) => {
		const { filename } = req.params

		try {
			unlink(`${join(__dirname, '../uploads')}/${filename}`, err => {
				if (err) {
					logger.error(err.message)
				}

				res.status(200).json(success('🎉 File deleted', {}, 200))
			})
		} catch (err) {
			logger.error(err.message)
			res.status(500).json(
				error(
					'Oops! We have an problem in our backend 😢',
					res.statusCode
				)
			)
		}
	}
}
