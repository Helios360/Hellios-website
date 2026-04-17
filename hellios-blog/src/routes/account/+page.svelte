<script>
    import { goto } from "$app/navigation";
    import { authClient } from "$lib/auth-client";
    import Hero from "$lib/components/Hero.svelte";

    const { data } = $props();

    let error = $state('');
    let success = $state('');
    let loginEmail = $state('');
    let loginPassword = $state('');
    let registerName = $state('');
    let registerEmail = $state('');
    let registerPassword = $state('');
    let mode = $state('login');

    async function login() {
        error = '';
        success = '';

        const {error: err} = await authClient.signIn.email({
            email: loginEmail,
            password: loginPassword,
            callbackURL: '/account'
        });
        if (err) {
            error = err.message ?? "Can't connect";
            return;
        }
        success='Connected successfully';
        await goto('/account', { invalidateAll: true });
    }
    async function register() {
        error = '';
        success = '';

        const {error: err} = await authClient.signUp.email({
            name: registerName,
            email: registerEmail,
            password: registerPassword,
            callbackURL: '/account'
        });
        if (err) {
            error = err.message ?? "Can't connect";
            return;
        }
        success='Account created successfully';
        await goto('/account', { invalidateAll: true });
    }
    async function logout (){
        await authClient.signOut();
        await goto('/account', { invalidateAll: true });
    }
</script>

<Hero title="Account" background="/city.gif" />

{#if !data.session}
<section class="contain-form">
    <div class="account-form">
        <span>
            <h2 class="glow-green" onclick={() => mode = 'login'}>Log In</h2>
            <h2 class="glow-green" onclick={() => mode = 'register'}>Register</h2>
        </span>
        <form class="common-div">
            {#if mode === 'login'}
                <input type="email" bind:value={loginEmail} placeholder="Email">
                <input type="password" bind:value={loginPassword} placeholder="Password">
                <button onclick={login}>Log In</button>
            {:else}
                <input type="text" bind:value={registerName} placeholder="Name">
                <input type="email" bind:value={registerEmail} placeholder="Email">
                <input type="password" bind:value={registerPassword} placeholder="Password">
                <button onclick={register}>Register</button>
            {/if}
            {#if error}<p>{error}</p>{/if}
            {#if success}<p>{success}</p>{/if}
        </form>
    </div>
</section>
{:else}
<section class="crud">
    <div class="account-form">
        <span>
            <h1>Hello {data.user.name}</h1>
            <button onclick={logout}>Logout</button>
        </span>
        <form class="common-div">
            <input type="text" bind:value={data.user.name} placeholder="Name">
            <input type="email" bind:value={data.user.email} placeholder="Email">
            <input type="password" bind:value={loginPassword} placeholder="Password">
            <button onclick={update}>Save</button>
        </form>
    </div>
</section>
{/if}

<style>
    .contain-form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .account-form{
        width:60%;
    }
    .account-form > span {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .account-form h2 { cursor: pointer; }
    .crud{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>