<script lang="ts">
    import type { PageProps } from "./$types";
    let { data }: PageProps = $props();
</script>
<section class="heading blog">
    <div>
        <h1 class="glowing-text">BLOG</h1>
        <h2>All my posts and projects here !</h2>
        <br>
    </div>
</section>
<section class="post-contain">
    
    {#each data.posts as post}
    <a href="/blog/{post.slug}"> 
        <span>
            <img src="{post.caption}" alt="windows 10">
            <h2 class="glowing-text2">{post.title}</h2>
        </span>
        <p>{post.excerpt}</p>
        <p>{post.date}</p>
    </a>
    {/each}
</section>
<style>
    
</style>