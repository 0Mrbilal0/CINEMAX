/**
 * Serveur NodeJS avec Express pour gérer les requêtes HTTP
 * Application : Cinemax
 * Description : Application d'inspiration pour trouver des films et les ajouter à une liste de favoris
 * Auteur : Jensone
 */

// ------------------------- IMPORTS ------------------------- //
const express = require("express"); 
const app = express(); 
const PORT = 3000; 
const Save = require("./functions/Save"); 
const cors = require('cors')
const path = require('path')
// const Delete = require("./functions/Delete"); // Importation de la fonction Delete

// ------------------------- ROUTES ------------------------- //

app.use(express.urlencoded({ extended: true }),cors());
app.use(express.json()) 
app.use(express.static('./client/build'))

// Route permettant de traiter l'enregistrement d'un film dans la liste des favoris
app.post("/api/save", (req, res) => {
  const imdbID = req.body.imdbID 
  const saveStatus = Save(imdbID);

  if (saveStatus) {
    res.redirect('/')
  }
});

app.get("/api/fav", (_,res) => {
  res.sendFile(path.join(__dirname, "./data.json"))
})

app.get("/*", (req,res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

app.listen(PORT, () => console.log("Le serveur est lancé sur le port " + PORT));