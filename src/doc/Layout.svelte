<script>
    export let title
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <h1 class="text-xl font-bold underline">{title}</h1>
    <div>
        <slot></slot>
    </div>
</main>
