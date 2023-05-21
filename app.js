import express from 'express'
import * as url from 'url'
import  hbs from 'hbs'
import "dotenv/config.js"

const app = express()
const port = process.env.PORT

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

//Handlebards
app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)

//Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.render('home', {
        name: 'Carlos Castro',
        title: 'Curso de Node'
    })
})

app.get('/generic', (req, res)=> {
    res.render('generic', {
        name: 'Carlos Castro',
        title: 'Curso de Node'
    })
})

app.get('/elements', (req, res)=> {
    res.sendFile(`${__dirname}/public/elements.html`)
})

app.get('*', (req, res)=> {
    res.sendFile(`${__dirname}/public/404.html`)
})

app.listen(port)