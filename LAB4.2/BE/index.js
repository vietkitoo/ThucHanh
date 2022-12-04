const express = require ('express')
const mongoose = require ('mongoose')
const Cors = require ('cors')
const Cards = require ('./dbCards.js')

const app = express()
const port = process.env.PORT || 8001
const connection_url ='mongodb+srv://vietkitoo:nguyenvqV172001@vietkitoo.lhtzkne.mongodb.net/tinderfake?retryWrites=true&w=majority'

app.use(express.json())
app.use(Cors())

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))

app.post('/dating/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) =>{
        if(err) {
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

app.get('/dating/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})


app.listen(port, () => console.log('Listening on localhost: 8001'))