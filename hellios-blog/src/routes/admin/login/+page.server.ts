import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from '../$types';
import { loginAdmin } from '$lib/server/users';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user?.role === 1) {
		throw redirect(302, '/admin');
	}

	return {};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();

		const email = String(formData.get('email') ?? '').trim();
		const password = String(formData.get('password') ?? '').trim();

		if (!email || !password) {
			return fail(400, { error: 'Email and password are required' });
		}

		const user = await loginAdmin(email, password);

		if (!user) {
			return fail(401, { error: 'Invalid credentials' });
		}

		cookies.set(
			'session',
			JSON.stringify({
				id: user._id.toString(),
				email: user.email,
				role: user.role
			}),
			{
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: false,
				maxAge: 60 * 60 * 24
			}
		);

		throw redirect(302, '/admin');
	}
};