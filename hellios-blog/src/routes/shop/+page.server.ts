import type { PageServerLoad } from "./$types";
import { getAllArticles } from "$lib/server/articles";

export const load: PageServerLoad = async () => {
    const articles = await getAllArticles();
    return {
        articles: articles.map((article) => ({
            _id: article._id.toString(),
            slug: article.slug,
            title: article.title,
            date: article.date.toISOString(),
            description: article.description ?? '',
            caption: article.caption ?? '',
            tags: article.tags ?? [],
        }))
    };
}