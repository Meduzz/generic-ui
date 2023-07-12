<script>
    export let name
    export let value
</script>

<div>
    <textarea {name} bind:value={value} {...$$restProps}></textarea>
</div>

<style>
    textarea {
        resize: both;
    }
</style>