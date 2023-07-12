<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    let defaultClass = 'border border-slate-400 border-solid shadow-lg p-2'
    let {classes, otherProps} = classHelper($$restProps)
</script>

<div class={twMerge(defaultClass, classes)}>
    <slot {...otherProps}></slot>
</div>