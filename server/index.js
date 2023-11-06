//
const express = require('express')

//
const app = express()
const port = 3000


// Ici on crée une route pour afficher un message simple
app.get('/api', (req, res) => {
    res.send('L\'API fonctionne correctement.')
})

app.get('/api/dl', (req,res) => {
    res.download('../client/src/assets/cinema.svg')
})

app.listen(port, () => {
    console.log(`Le server est lancé sur le port ${port}`);
})
