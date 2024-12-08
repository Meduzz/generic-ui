<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    let { onclick, children, ...rest } = $props();

    let defaultClass = 'px-3 py-1 border'
    let {classes, otherProps} = classHelper(rest)
</script>

<button type="button" class={twMerge(defaultClass, classes)} {onclick} {...otherProps}>
    {@render children()}
</button>