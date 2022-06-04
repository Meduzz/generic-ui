<script>
    export let rows
    export let tableClass = "table-auto w-full"
</script>

<table class={tableClass} {...$$restProps}>
    <thead>
        <slot name="head"></slot>
    </thead>
    <tbody>
    {#each rows as item}
        <slot name="body" {item}></slot>
    {/each}
    </tbody>
    <tfoot>
        <slot name="footer"></slot>
    </tfoot>
</table>