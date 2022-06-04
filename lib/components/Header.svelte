<script>
    export let title
    export let makePageTitle = false
</script>

<svelte:head>
    {#if makePageTitle}
    <title>{title}</title>
    {/if}
</svelte:head>
<div class="text-2xl mb-1 border-b-4 border-red-400" {...$$restProps}>{title}</div>