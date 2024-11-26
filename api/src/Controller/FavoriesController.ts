import { Request, Response } from "express";
import { Favorites } from "../DTO/FavoritesDTO";
import { findAllFavorites, addFavorite } from "../Model/FavoriesModel";

// Route: /favorites
const FavoriesController = (async (req: Request, res: Response) => {
   if (req.method === 'GET') {
      console.info("GET")
      res.status(200).json(findAllFavorites())

   } else if (req.method === 'POST') {
      console.info("POST")
      const request: Favorites = req.body
      res.status(200).json(addFavorite({ id: request.id, movie: request.movie }))
   }
})

export default FavoriesController