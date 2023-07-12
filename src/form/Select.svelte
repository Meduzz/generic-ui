<script>
    export let name
    export let items
    export let value
</script>

<div>
    <select {name} bind:value={value} {...$$restProps}>
        {#each items as item}
            <slot {item}></slot>
        {/each}
    </select>
</div>