<script>
    export let items = []
    export let values = []
</script>

<div>
    {#each items as item}
        <label>
            <input type="checkbox" value={item.value} bind:group={values} />
            {item.label}
        </label>
    {/each}
</div>

<style>
    label {
        display: block;
    }
</style>