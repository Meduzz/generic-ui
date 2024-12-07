<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    let { label, onclick, ...rest } = $props();

    let defaultClass = 'px-3 py-1'
    let {classes, otherProps} = classHelper(rest)
</script>

<button type="button" class={twMerge(defaultClass, classes)} {onclick} {...otherProps}>
    <span>{label}</span>
</button>