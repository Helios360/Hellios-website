import type { PageServerLoad } from "./$types";
import { getAllPosts } from "$lib/server/posts";

export const load: PageServerLoad = async () => {
    const posts = await getAllPosts();
    return {
		posts: posts.map((post) => ({
			_id: post._id.toString(),
			slug: post.slug,
			title: post.title,
			date: post.date.toISOString(),
			excerpt: post.excerpt ?? '',
			caption: post.caption ?? '',
			content: post.content ?? ''
		}))
	};
}