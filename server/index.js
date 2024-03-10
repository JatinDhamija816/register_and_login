import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import Connection from './database/db.js'
import router from './routes/user.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/', router)
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log("Server Start")
})

const password = process.env.PASSWORD
Connection(password)