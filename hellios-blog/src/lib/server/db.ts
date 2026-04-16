import { MongoClient, Db } from 'mongodb';
import { MONGO_URI } from '$env/static/private';

const client = new MongoClient(MONGO_URI);

let db: Promise<any>;

export function getDb(): Promise<Db>{
    if (!db) {
        db = client.connect().then(c => c.db('Hellios-Blog'));
    }
    return db;
}