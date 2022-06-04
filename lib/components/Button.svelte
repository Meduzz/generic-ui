<script>
    export let label
    export let action
    export let spanClass = 'hover:border-b-2 hover:border-red-400'
</script>

<button type="button" on:click={action} class="border border-solid border-slate-400 py-1 px-3" {...$$restProps}>
    <span class={spanClass}>{label}</span>
</button>