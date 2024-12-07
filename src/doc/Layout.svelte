<script>
    let { title, children } = $props();

    /*
     * TODO
     * - Use title component as title
     */
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <h1 class="text-xl font-bold underline">{title}</h1>
    <div>
        {@render children()}
    </div>
</main>
