//LOAD IN EXPRESS LIBRARY 
const path = require('path') //core module
const express = require('express')
const hbs = require('hbs')

const app = express()

//DEFINE PATHS FOR EXPRESS CONFIG
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') 
const partialsPath = path.join(__dirname, '../templates/partials') 

//SETUP HANDLEBARS, ENGINE, AND VIEWS LOCATION
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath) 

//SETUP STATIC DIRECTORY TO SERVE
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    //render one of your views
    res.render('index', {
        title: 'Weather Home Page',
        location : 'Philippines',
        comment: 'This is a dynamic content!!!!',
        name: 'Joyce Perez',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Joyce Perez',
        description: 'fat'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Joyce Perez',
        message: "This is the help page"
    })
})

//match any page that starts with help
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'Joyce Perez',
        message: "Help article not found"
    })
})


//for 404 page; should come last
app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'Joyce Perez',
        message: "Page not found"
    })
})

// app.get('/weather', (req, res) => {
//     res.send({
//         location: 'Philippines',
//         forecast: 'It\'s 30 degrees'
//     })
// })

//START UP THE SERVER (3000 is a common development port)
app.listen(3000, () => {
    console.log('Server is up on port 3000.') //not displayed on the browser
})

