<script>
    export let items = []
    export let value
</script>

<div>
    {#each items as item}
        <label>
            <input type="radio" value={item.value} bind:group={value} />
            {item.label}
        </label>
    {/each}
</div>

<style>
    label {
        display: block;
    }
</style>