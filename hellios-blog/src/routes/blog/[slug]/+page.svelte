<script lang="ts">
    let { data } = $props();
</script>
<svelte:head>
    <title>{data.post.title}</title>
    <meta name="descrition" content={data.post.excerpt}/>
</svelte:head>
<section class="content">
<img src={data.post.caption} alt="windows10">
<h1>{data.post.title}</h1>
<h3>{data.post.date}</h3>
<p>{data.post.content}</p>
</section>