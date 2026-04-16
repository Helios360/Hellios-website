<script lang="ts">
	let { form } = $props();
</script>
<section class="heading blog">
    <div>
        <h1 class="glowing-text">Admin Login</h1>
        <h2>All my posts and projects here !</h2>
        <br>
    </div>
</section>

<form method="POST">
	<div>
		<label for="email">Email</label>
		<input id="email" name="email" type="email" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	<button type="submit">Login</button>
</form>

{#if form?.error}
	<p>{form.error}</p>
{/if}