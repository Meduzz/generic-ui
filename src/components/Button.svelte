<script>
    export let label
    export let action
</script>

<button type="button" on:click={action} {...$$restProps}>
    <span>{label}</span>
</button>