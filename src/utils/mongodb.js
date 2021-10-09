import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

const cachedDb
const cachedClient

if (!uri) {
    throw new Error('Definir variáveis de ambiente com os acessos ao mongo')
}

if (!dbName) {
    throw new Error('Definir variáveis de ambiente com os acessos ao mongo')
}

export async function connectionToDatabase() {
    if( cachedClient && cachedDb ){
        return { client: cachedDb, db: cachedDb }
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = await client.db(dbName)

    cachedClient = client
    cachedDb = db

    return { client, db }
}

export default connectionToDatabase