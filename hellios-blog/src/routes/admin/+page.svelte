<script lang="ts">
	let { data, form } = $props();
</script>
<section class="heading blog">
    <div>
        <h1 class="glowing-text">Admin Panel</h1>
        <h2>All my posts and projects here !</h2>
        <br>
    </div>
</section>

<p><a href="/admin/logout">Logout</a></p>

<h2>Create Post</h2>

<form method="POST" action="?/createPost">
	<div>
		<label for="slug">Slug</label>
		<input id="slug" name="slug" required />
	</div>

	<div>
		<label for="title">Title</label>
		<input id="title" name="title" required />
	</div>

	<div>
		<label for="excerpt">Excerpt</label>
		<textarea id="excerpt" name="excerpt"></textarea>
	</div>

	<div>
		<label for="caption">Caption</label>
		<input id="caption" name="caption" />
	</div>

	<div>
		<label for="content">Content</label>
		<textarea id="content" name="content" rows="10"></textarea>
	</div>

	<button type="submit">Create Post</button>
</form>

{#if form?.error}
	<p>{form.error}</p>
{/if}

{#if form?.success}
	<p>Post created successfully.</p>
{/if}

<h2>Posts</h2>

<ul>
	{#each data.posts as post}
		<li>
			<a href={`/blog/${post.slug}`}>{post.title}</a>
		</li>
	{/each}
</ul>