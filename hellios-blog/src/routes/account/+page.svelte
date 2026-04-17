<script lang="ts">
	import { authClient } from '$lib/auth-client.js';

	const { data } = $props();

	let loginEmail = '';
	let loginPassword = '';

	let registerName = '';
	let registerEmail = '';
	let registerPassword = '';

	let error = '';
	let success = '';

	async function login() {
		error = '';
		success = '';

		const { error: err } = await authClient.signIn.email({
			email: loginEmail,
			password: loginPassword,
			callbackURL: '/account'
		});

		if (err) {
			error = err.message ?? 'Connexion impossible';
			return;
		}

		success = 'Connecté';
		window.location.href = '/account';
	}

	async function register() {
		error = '';
		success = '';

		const { error: err } = await authClient.signUp.email({
			name: registerName,
			email: registerEmail,
			password: registerPassword,
			callbackURL: '/account'
		});

		if (err) {
			error = err.message ?? 'Inscription impossible';
			return;
		}

		success = 'Compte créé';
		window.location.href = '/account';
	}

	async function logout() {
		await authClient.signOut();
		window.location.href = '/account';
	}
</script>

<h1>Account</h1>

{#if !data.session}
	<div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">
		<div>
			<h2>Login</h2>
			<input bind:value={loginEmail} type="email" placeholder="Email" />
			<input bind:value={loginPassword} type="password" placeholder="Password" />
			<button on:click={login}>Login</button>
		</div>

		<div>
			<h2>Register</h2>
			<input bind:value={registerName} type="text" placeholder="Name" />
			<input bind:value={registerEmail} type="email" placeholder="Email" />
			<input bind:value={registerPassword} type="password" placeholder="Password" />
			<button on:click={register}>Register</button>
		</div>
	</div>
{:else}
	<p>Connecté en tant que <strong>{data.user.email}</strong></p>
	<p>Nom : {data.user.name}</p>

	<button on:click={logout}>Logout</button>
{/if}

{#if error}
	<p style="color:red;">{error}</p>
{/if}

{#if success}
	<p style="color:green;">{success}</p>
{/if}