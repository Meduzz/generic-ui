<script>
import {twMerge} from 'tailwind-merge'
import {classHelper} from '../helper'

export let items = []

let defaultClass = 'flex flex-col'
let {classes, otherProps} = classHelper($$restProps || {class:''})
</script>

<div class={twMerge(defaultClass, classes)} {...otherProps}>
    {#each items as item}
    <slot {item}></slot>
    {:else}
    <slot></slot>
    {/each}
</div>