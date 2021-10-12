import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'

const app = express()
const PORT = 3033

// connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`Serveur node et express sur port ${PORT}`)
})

app.listen(PORT, () =>
    console.log(`Votre serveur est sur le port ${PORT}`)
)


