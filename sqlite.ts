import sqlite3 from 'sqlite3'
import { Favorites } from './src/DTO/FavoritesDTO';
sqlite3.verbose()
const initdb = new sqlite3.Database('./data.db');
var datas: Favorites[] = []

class db {
    static add(sql: string, params: string[]): Favorites[] {
        initdb.serialize(() => {
            initdb.run(
                "CREATE TABLE IF NOT EXISTS favories (id TEXT UNIQUE, movie TEXT)"
            );

            const stmt = initdb.prepare(sql);
            stmt.run(params)
            stmt.finalize();

            initdb.all<Favorites>("SELECT * FROM favories", (err, rows) => {
                datas = rows
            });
        });
        return datas
    }

    static getFavories(): Favorites[] {
        initdb.serialize(() => {
            initdb.run(
                "CREATE TABLE IF NOT EXISTS favories (id TEXT UNIQUE, movie TEXT)"
            );
            initdb.all<Favorites>("SELECT * FROM favories", (err, rows) => {
                datas = rows
            });
        });
        console.log(datas);
        return datas
    };
};

export { db }