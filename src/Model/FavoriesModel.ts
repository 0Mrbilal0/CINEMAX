import { db } from "../../sqlite"
import { Favorites } from "../DTO/FavoritesDTO"

function addFavorite(params: Favorites): Favorites[] {
    return db.add("INSERT or IGNORE INTO favories VALUES (?,?)", [params.id.toString(), params.movie.toString()])
}

function findAllFavorites(): Favorites[] {
    return db.getFavories()
}

export { addFavorite, findAllFavorites }