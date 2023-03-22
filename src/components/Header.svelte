<script>
    export let title
    export let makePageTitle = false
</script>

<svelte:head>
    {#if makePageTitle}
    <title>{title}</title>
    {/if}
</svelte:head>
<h1 class="text-2xl underline" {...$$restProps}>{title}</h1>