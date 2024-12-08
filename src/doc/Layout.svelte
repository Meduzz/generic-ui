<script>
    let { title, children } = $props();
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <h1 class="text-2xl font-bold underline">{title}</h1>
    <div>
        {@render children()}
    </div>
</main>
