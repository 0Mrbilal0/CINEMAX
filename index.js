/**
 * Serveur NodeJS avec Express pour gérer les requêtes HTTP
 * Application : Cinemax
 * Description : Application d'inspiration pour trouver des films et les ajouter à une liste de favoris
 * Auteur : Jensone
 */

// ------------------------- IMPORTS ------------------------- //
const express = require("express"); // Framework pour NodeJS
const app = express(); // Création de l'application
const PORT = 3001; // Définition du port d'écoute
const Save = require("./functions/Save"); // Importation de la fonction Save
const cors = require('cors')
const path = require('path')
// const Delete = require("./functions/Delete"); // Importation de la fonction Delete

// ------------------------- ROUTES ------------------------- //

/**
 * Middleware
 * Le middleware est une fonction qui va être exécutée à chaque requête
 * elle va permettre de traiter les données avant de les envoyer au serveur
 * cela agit comme un filtre pour éviter les erreurs et définir des règles.
 * 
 * Dans notre cas, on va utiliser le middleware express.urlencoded qui va
 * nous permettre de récupérer les données envoyées par le formulaire.
 * 
 * Le paramètre extended à true permet de récupérer les données envoyées
 * par le formulaire sous la forme d'un objet.
 */
app.use(express.urlencoded({ extended: true }),cors());
app.use(express.json()) 
app.use(express.static('./client/build'))


// Route permettant de traiter l'enregistrement d'un film dans la liste des favoris
app.post("/api/save", (req, res) => {
  const imdbID = req.body.imdbID // On récupère les données envoyées par le formulaire
  const saveStatus = Save(imdbID); // On appelle la fonction Save en lui envoyant les données
  // Vérification du statut de la fonction Save
  if (saveStatus) {
    res.redirect('/')
  }
});

app.get("/api/fav", (_,res) => {
  res.sendFile(__dirname + "/data.json")
})

app.get("/*", (req,res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
// Route permettant de traiter la suppression d'un film dans la liste des favoris
// app.post("/api/delete", (req, res) => {
//   const imdbID = req.body // On récupère les données envoyées par le formulaire
//   Delete(imdbID); // On appelle la fonction Delete en lui envoyant les données
// });


/** Lancement du serveur
* La méthode listen permet de lancer le serveur sur le port défini
* dans la constante PORT
*/
app.listen(PORT, () => console.log("Le serveur est lancé sur le port " + PORT));