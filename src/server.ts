import express from 'express'
import mongoose from 'mongoose'
import router from './routes'


const app = express()

app.use(express.json())
app.use(router)


mongoose.connect('mongodb+srv://jeanlacerda444:Jean230489@cluster0.xqqd4cs.mongodb.net/?retryWrites=true&w=majority')

.then((data)=>{
    console.log('mongoDB Connection succeeded')
})

.catch((err)=>{
    console.log('Error in Db connection',err.message)
})


app.listen(3333)

