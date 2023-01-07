const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const Pusher = require("pusher")
const Posts = require("./models/postModel")

dotenv.config()          
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected!")).catch((err) => console.log(err))

const PORT = process.env.PORT || 9000

const pusher = new Pusher({
  appId: process.env.PUSHER_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "ap2",
  useTLS: true
})

mongoose.connection.once('open', () => {
    const changeStream = mongoose.connection.collection('post').watch()
    changeStream.on('change', change => {
        console.log(change)
        if(change.operationType === "insert") {
            console.log('Trigerring Pusher')
            pusher.trigger('post', 'inserted', {
                change: change
            })
        } else {
            console.log('Error trigerring Pusher')
        }
    })
})

app.post('/upload', (req, res) => {
    const dbPost = req.body
    Posts.create(dbPost, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/sync', (req, res) => {
    Posts.find((err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})


app.get('/', (req, res) => {
    res.send('BACKEND IS RUNNING')
  })
  
app.listen(PORT, () => {
    console.log("Backend server is running!")
})