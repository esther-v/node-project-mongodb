const express = require('express') 

const app = express()
const PORT = 3001

app.get('/', (req, res) => {
    res.send(`Serveur node et express sur port ${PORT}`)
})

app.listen(PORT, () =>
    console.log('Votre serveur est sur le port 3001')
)