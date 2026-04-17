<script lang="ts">
    import { page } from "$app/state";
    import Hero from "$lib/components/Hero.svelte";
</script>
<svelte:head>
    <title>{page.status} - Error</title>
</svelte:head>
<Hero 
    title="Oops did you get lost ?" 
    subtitle={page.status + " " + page.error?.message}
    background="/city.gif"
    />