import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPostBySlug } from '$lib/server/posts';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post: {
			_id: post._id.toString(),
			slug: post.slug,
			title: post.title,
			date: post.date.toISOString(),
			excerpt: post.excerpt ?? '',
			caption: post.caption ?? '',
			content: post.content ?? ''
		}
	};
};