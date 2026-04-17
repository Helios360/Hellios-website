<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";

    let { data } = $props();
</script>
<svelte:head>
    <title>{data.post.title}</title>
    <meta name="descrition" content={data.post.excerpt}/>
</svelte:head>
<Hero
    title={data.post.title}
    subtitle={data.post.date}
    background={data.post.caption}
    />
<section class="content">
    <p>{data.post.content}</p>
</section>
<style>
    
</style>