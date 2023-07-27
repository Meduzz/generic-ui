<script>
    import {classHelper} from '../helper'

    export let items = []
    export let values = []
    export let name

    let {classes, otherProps} = classHelper($$restProps)
</script>

<div>
    {#each items as item}
        <label class={classes}>
            <input type="checkbox" {name} value={item.value} bind:group={values} {...otherProps} />
            {item.label}
        </label>
    {/each}
</div>

<style>
    label {
        display: block;
    }
</style>