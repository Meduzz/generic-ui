<script>
    import {classHelper} from '../helper'

    export let items = []
    export let value

    let {classes, otherProps} = classHelper($$restProps)
</script>

<div>
    {#each items as item}
        <label class={classes}>
            <input type="radio" value={item.value} bind:group={value} {...otherProps} />
            {item.label}
        </label>
    {/each}
</div>

<style>
    label {
        display: block;
    }
</style>