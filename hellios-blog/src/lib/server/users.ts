import type { WithId } from "mongodb";
import { getDb } from "./db";

export type User = {
    email: string,
    password: string,
    role: 0 | 1,
    register_time: Date,
    upadate_time?: Date,
}

export async function getUserByEmail(email: string): Promise<WithId<User> | null> {
    const db = await getDb();
    return db.collection<User>('users').findOne({ email });
}
export async function loginAdmin(email: string, password: string): Promise<WithId<User> | null>{
    const user = await getUserByEmail(email);
    if (!user) return null;
    if (user.password !== password) return null;
    if (user.role !== 1) return null;
    return user;
}