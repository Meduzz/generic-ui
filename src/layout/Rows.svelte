<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    let defaultClass = 'flex flex-col gap-2'
    let {classes, otherProps} = classHelper($$restProps)
</script>

<div class={twMerge(defaultClass, classes)}>
    <slot {...otherProps}></slot>
</div>