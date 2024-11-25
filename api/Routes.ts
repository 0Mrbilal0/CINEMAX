import { Router } from 'express'
import FavoriesController from './src/Controller/FavoriesController'
const router = Router()

// NE PAS OUBLIER LA PRIORITER DES ROUTES

router.get('/favorites', FavoriesController)
router.post('/favorites', FavoriesController)

export default router
