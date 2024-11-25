import sqlite3 from 'sqlite3'
import { Favorites } from './src/DTO/FavoritesDTO';
sqlite3.verbose()
const initdb = new sqlite3.Database('./data.db');

class db {
    static add(sql: string, params: string[]): Favorites[] {
        var datas: Favorites[] = []
        initdb.serialize(() => {
            initdb.run(
                "CREATE TABLE IF NOT EXISTS favories (id TEXT UNIQUE, movie TEXT)"
            );
            try {
                const stmt = initdb.prepare(sql);
                stmt.run(params)
                stmt.finalize();
            } catch {
                console.error("il y'a une erreur!");
            }
            initdb.all<Favorites>("SELECT * FROM favories", (err, rows) => {
                datas = rows
            });
        });
        initdb.close()        
        return datas
    }
    
    static getFavories(): Favorites[] {
        var datas: Favorites[] = []
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