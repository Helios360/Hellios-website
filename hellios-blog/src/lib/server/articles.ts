import type { InsertOneResult, ListCollectionsCursor, WithId } from "mongodb";
import { getDb } from "./db";

type Article = {
    slug: string,
    title: string,
    date: Date,
    description: string,
    price: number,
    caption: string,
    tags: string[],
};

export async function getAllArticles(): Promise<WithId<Article>[]> {
    const db = await getDb();
    return db.collection<Article>('articles').find({}).sort({date: -1}).toArray();
}
export async function getArticleBySlug(slug: string): Promise<WithId<Article> | null>{
    const db = await getDb();
    return db.collection<Article>('articles').findOne({ slug });
}
export async function createArticle(article: Article): Promise<InsertOneResult<Article>>{
    const db = await getDb();
    return db.collection<Article>('articles').insertOne(article);
}
