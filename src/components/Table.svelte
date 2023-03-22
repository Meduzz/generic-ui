<script>
    export let rows
</script>

<table class="table-auto w-full" {...$$restProps}>
    <thead>
        <slot name="header"></slot>
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