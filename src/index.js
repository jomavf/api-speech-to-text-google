const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

const getAudio = require('./api/stt-api')
const app = express()

app.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

app.use(cors())

app.get('/',(req,res)=>{
    return res.status(200).json({
        result: 'success'
    })
})

app.post('/',async (req,res)=>{
    let result = await getAudio(req.body.data)
    console.log('resultado', result)
    return res.status(200).json({ result })
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Listening on port ${process.env.PORT}`,process.env.GOOGLE_APPLICATION_CREDENTIALS)
})