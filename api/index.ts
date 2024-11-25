import express from 'express'
import router from './Routes'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('./public'));
app.use(cors())
app.use('/', router);

app.listen(process.env.PORT, () => {
    console.info(`le server est bien lancer sur le port ${process.env.PORT} !`)
    console.info('http://localhost:' + process.env.PORT)
})

