import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { createPost, getAllPosts, getPostBySlug } from '$lib/server/posts';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user || locals.user.role !== 1) {
		throw redirect(302, '/admin/login');
	}

	const posts = await getAllPosts();

	return {
		posts: posts.map((post) => ({
			_id: post._id.toString(),
			slug: post.slug,
			title: post.title,
			date: post.date.toISOString()
		}))
	};
};

export const actions: Actions = {
	createPost: async ({ request, locals }) => {
		if (!locals.user || locals.user.role !== 1) {
			throw redirect(302, '/admin/login');
		}

		const formData = await request.formData();

		const slug = String(formData.get('slug') ?? '').trim();
		const title = String(formData.get('title') ?? '').trim();
		const excerpt = String(formData.get('excerpt') ?? '').trim();
		const caption = String(formData.get('caption') ?? '').trim();
		const content = String(formData.get('content') ?? '').trim();

		if (!slug || !title) {
			return fail(400, { error: 'Slug and title are required' });
		}

		const existing = await getPostBySlug(slug);

		if (existing) {
			return fail(400, { error: 'Slug already exists' });
		}

		await createPost({
			slug,
			title,
			date: new Date(),
			excerpt,
			caption,
			content
		});

		return { success: true };
	}
};