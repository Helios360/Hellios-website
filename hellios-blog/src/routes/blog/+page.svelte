<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();
</script>
<Hero
    title="Blog" 
    subtitle="Some of the knowledge and tricks I got" 
    background="/hacker.gif"
    />
<section class="post-contain">
    {#each data.posts as post}
    <a href="/blog/{post.slug}"> 
        <span>
            <img src="{post.caption}" alt="{post.slug}">
            <h2 class="glowing-text2">{post.title}</h2>
        </span>
        <p>{post.excerpt}</p>
        <p>{post.date}</p>
    </a>
    {/each}
</section>