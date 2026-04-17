<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();
</script>

<Hero title="Shop" subtitle="Items, Plans, Ideas, anything can support me !" background="/cityportrait.gif"/>
<section class="post-contain">
    {#each data.articles as article}
    <a href="/shop/{article.slug}"> 
        <span>
            <img src="{article.caption}" alt="{article.slug}">
            <h2 class="glowing-text2">{article.title}</h2>
        </span>
        <p>{article.description}</p>
        <p>{article.date}</p>
    </a>
    {/each}
</section>