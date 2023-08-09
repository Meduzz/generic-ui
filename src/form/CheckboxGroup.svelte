<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    export let items = []
    export let values = []
    export let name

    let defaultClass = 'block'
    let {classes, otherProps} = classHelper($$restProps)
</script>

<div>
    {#each items as item}
        <label class={twMerge(defaultClass, classes)}>
            <input type="checkbox" {name} value={item.value} bind:group={values} {...otherProps} />
            {item.label}
        </label>
    {/each}
</div>