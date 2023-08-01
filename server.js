require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const responseTime = require('response-time')
const serveIndex = require('serve-index')
const logger = require('./helpers/logger')
const { router } = require('./routes')
const { join } = require('path')
const app = express()

app.use(responseTime())
app.use(helmet())
app.use(
	cors({
		origin: '*',
		optionsSuccessStatus: 200
	})
)
app.use(express.json())
app.use(
	express.urlencoded({
		extended: false
	})
)

app.use('/api', router)
app.use(
	'/',
	express.static(join(__dirname, './uploads')),
	serveIndex('uploads', { icons: true })
)

app.use(require('./middlewares/notFoundHandler'))

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || 'localhost'
const server = app.listen(PORT, () => {
	logger.success(
		`🚀 Server started at HOST: ${HOST} on PORT: ${PORT} with processId: ${process.pid}`
	)
})

process.on('SIGINT', () => {
	logger.info('SIGINT signal received.')
	logger.info('Server is closing.')
	server.close(() => {
		logger.info('Server closed.')
		process.exit(0)
	})
})

process.on('SIGTERM', () => {
	logger.info('SIGTERM signal received.')
	logger.info('Server is closed.')
	server.close(() => {
		logger.info('Server closed.')
		process.exit(0)
	})
})

module.exports = app
