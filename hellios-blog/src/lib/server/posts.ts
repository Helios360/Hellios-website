import type { InsertOneResult, WithId } from "mongodb";
import { getDb } from "./db";

type Post = {
    slug: string,
    title: string,
    date: Date,
    excerpt: string,
    caption: string,
    content: string,
};

export async function getAllPosts(): Promise<WithId<Post>[]> {
    const db = await getDb();
    return db.collection<Post>('posts').find({}).sort({date: -1}).toArray();
}
export async function getPostBySlug(slug: string): Promise<WithId<Post> | null>{
    const db = await getDb();
    return db.collection<Post>('posts').findOne({ slug });
}
export async function createPost(post: Post): Promise<InsertOneResult<Post>>{
    const db = await getDb();
    return db.collection<Post>('posts').insertOne(post);
}
