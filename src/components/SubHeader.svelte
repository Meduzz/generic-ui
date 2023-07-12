<script>
    import { twMerge } from 'tailwind-merge'
    import {classHelper} from '../helper'

    export let title

    let defaultClass = 'text-xl'
    let {classes, otherProps} = classHelper($$restProps)
</script>

<h3 class={twMerge(defaultClass, classes)} {...otherProps}>{title}</h3>