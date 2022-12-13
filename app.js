const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index')

const PORT = 5000;
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/', router);

const start = async() => {
	try {
		app.listen(PORT, ()=> console.log('server has been started'))
	} catch (error) {
		console.log(error)
	}
}

start()