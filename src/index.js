const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const getAudio = require('./api/stt-api')
const app = express()

app.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

app.use(cors())

app.post('/',async (req,res)=>{
    let result = await getAudio(req.body.data)
    console.log('resultado', result)
    return res.status(200).json({ result })
})

app.listen(8000, () => {
    console.log('Listening on port 8000',process.env.GOOGLE_APPLICATION_CREDENTIALS)
})