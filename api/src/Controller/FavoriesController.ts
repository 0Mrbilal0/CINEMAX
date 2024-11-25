import { Request, Response } from "express";
import { Favorites } from "../DTO/FavoritesDTO";
import { findAllFavorites, addFavorite } from "../Model/FavoriesModel";

// Route: /favorites
const FavoriesController = (async (req: Request, res: Response) => {
   if (req.method === 'GET') {
      console.info("GET")
      try {
         res.json(findAllFavorites())
      } catch {
         console.error("il y'a une erreur");
      }

   } else if (req.method === 'POST') {
      console.info("POST")
      const request: Favorites = req.body
      res.json(addFavorite({ id: request.id, movie: request.movie }))

   }
})


export default FavoriesController