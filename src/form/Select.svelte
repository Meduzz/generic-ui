<script>
    export let name
    export let items
    export let value
</script>

<div>
    <select name={name} bind:value={value} class="input" {...$$restProps}>
        {#each items as item}
            <slot {item}></slot>
        {/each}
    </select>
</div>