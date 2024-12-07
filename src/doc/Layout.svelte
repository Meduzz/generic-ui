<script>
    import { Header } from "$lib"

    let { title, children } = $props();
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <Header class="font-bold underline" {title} makePageTitle={true} />
    <div>
        {@render children()}
    </div>
</main>
