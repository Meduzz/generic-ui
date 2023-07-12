<script>
    import { twMerge } from 'tailwind-merge'
    import {classHelper} from '../helper'

    export let rows

    let defaultClass = ''
    let {classes, otherProps} = classHelper($$restProps)
</script>

<table class={twMerge(defaultClass, classes)} {...otherProps}>
    <thead>
        <slot name="header"></slot>
    </thead>
    <tbody>
    {#each rows as item}
        <slot name="body" {item}></slot>
    {/each}
    </tbody>
    <tfoot>
        <slot name="footer"></slot>
    </tfoot>
</table>