<script>
    export let label
    export let action
</script>

<button type="button" on:click={action} class="button" {...$$restProps}>
    <span>{label}</span>
</button>