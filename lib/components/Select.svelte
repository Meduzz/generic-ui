<script>
    export let name
    export let label
    export let items
    export let bindValue
    export let wrapperClass = 'pb-2'
    export let labelClass = 'block'
    export let selectClass = 'border border-solid border-slate-400 px-3 py-1 w-full bg-white'

</script>

<div class={wrapperClass}>
    <label class={labelClass} for={name}>{label}</label>
    <select name={name} bind:value={bindValue} class={selectClass} {...$$restProps}>
        {#each items as item}
            <slot {item}></slot>
        {/each}
    </select>
</div>