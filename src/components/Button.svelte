<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    export let label

    let defaultClass = 'px-3 py-1'
    let {classes, otherProps} = classHelper($$restProps)
</script>

<button type="button" class={twMerge(defaultClass, classes)} on:click {...otherProps}>
    <span>{label}</span>
</button>