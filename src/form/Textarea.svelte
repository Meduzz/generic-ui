<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    export let name
    export let value

    let defaultClass = 'resize p-1 w-full border-b'
    let {classes, otherProps} = classHelper($$restProps)
</script>

<textarea {name} bind:value={value} {...otherProps} class={twMerge(defaultClass, classes)}></textarea>
