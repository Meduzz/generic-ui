<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    let defaultClass = 'p-2 container mx-auto'
    let {classes, otherProps} = classHelper($$restProps || {class:''})
</script>

<div class={twMerge(defaultClass, classes)}>
    <slot {...otherProps}></slot>
</div>
