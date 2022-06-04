<script>
    export let title
    export let makePageTitle = false
</script>

<svelte:head>
    {#if makePageTitle}
    <title>{title}</title>
    {/if}
</svelte:head>
<div {...$$restProps}>{title}</div>