<script>
    import {classHelper} from '../helper'

    export let items = []
    export let values = []

    let {classes, otherProps} = classHelper($$restProps)
</script>

<div>
    {#each items as item}
        <label class={classes}>
            <input type="checkbox" value={item.value} bind:group={values} {...otherProps} />
            {item.label}
        </label>
    {/each}
</div>

<style>
    label {
        display: block;
    }
</style>