//VARIABLES
const chalk = require('chalk')

const express = require('express')

const app = express()

//MIDLEWARE
app.use(express.static('public'))

//ROUTES
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response)=>{
    response.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (request, response)=>{
    response.sendFile(__dirname + '/views/gallery.html')
})


app.listen(3000, ()=>{
})
