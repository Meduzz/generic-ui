<script>
    export let name
    export let value
</script>

<div>
    <textarea {name} bind:value={value} class="input" {...$$restProps}></textarea>
</div>

<style>
    textarea {
        resize: both;
    }
</style>