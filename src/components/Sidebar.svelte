<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    let defaultClass = 'fixed top-0 left-0 h-screen w-48 p-4 z-1 bg-slate-200'
    let {classes, otherProps} = classHelper($$restProps || {class:''})
</script>

<div class={twMerge(defaultClass, classes)}>
    <slot {...otherProps}></slot>
</div>