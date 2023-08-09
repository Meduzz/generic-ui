<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    export let name
    export let items
    export let value

    let defaultClass = 'p-1 w-full'
    let {classes, otherProps} = classHelper($$restProps)
</script>

<select {name} bind:value={value} {...otherProps} class={twMerge(defaultClass, classes)}>
    {#each items as item}
        <slot {item}></slot>
    {/each}
</select>
