const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

//console.log(__dirname) //D:\node-course\web-server\src
//console.log(__filename) //D:\node-course\web-server\src\app.js
//console.log(path.join(__dirname)) //D:\node-course\web-server\src
//console.log(path.join(__dirname, '..')) //D:\node-course\web-server
//console.log(path.join(__dirname, '../..'))  //D:\node-course
//console.log(path.join(__dirname, '../public')) //D:\node-course\web-server\public

const app = express()
const port = process.env.PORT || 3000

//define path for express config
const publicDirPth = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//set up handlebar engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirPth))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Rehaan Khan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'For Further Information please, contact rehaancool796@gmail.com',
        name: 'Rehaan Khan'
    })
})



app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

//app.com
//app.com/help


app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide address!'
        })
    }




    const address = req.query.address

    geocode(address, (error, {latitude, longitude, location} = {}) => {
    if(error){
        //return console.log('Error:', error)
        return res.send({error})
    }
    
    forecast(latitude, longitude ,(error, data2) => {
    
        if(error){
        //   return   console.log('Error:', error)
        return res.send({error})
        }
    
        

        res.send({
            location,
            forecast: data2,
            address: req.query.address
        })
        
       })
    
    })







    // res.send({
    //     forecast: 'The weather is Sunny',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
})




app.get('/products', (req, res) => {

    if(!req.query.search){
    return res.send({
    error: 'You must Provide Search Term!'
  })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})


//custom 404 for page not exist http://localhost:3000/help/blahblahblah
app.get('/help/*', (req, res) => {
res.render('404', {
    title: '404 Help',
    message:'Help Article Not Found!'
})
})

//for 404 error
app.get('*', (req, res) => {
res.render('404', {
    title: '404',
message: 'Page not Found!'
})
})

app.listen(port, () => {
    console.log('Server is up on port'+port)
})