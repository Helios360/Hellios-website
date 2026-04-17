import { betterAuth } from 'better-auth';
import { mongodbAdapter } from '@better-auth/mongo-adapter';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { getDb, client } from './db';
import { BETTER_AUTH_SECRET, BETTER_AUTH_URL } from '$env/static/private';

const db = await getDb();

export const auth = betterAuth({
    database: mongodbAdapter(db),
    secret: BETTER_AUTH_SECRET,
    baseURL: BETTER_AUTH_URL,
    emailAndPassword: { enabled: true },
    users: {
        additionalFields: {
            role: {
                type: 'number',
                required: false,
                defaultValue: 0,
                input: false
            }
        }
    },
    plugins: [sveltekitCookies(getRequestEvent)],
});