<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {Snippet<any>} children
     */

    /** @type {Props & { [key: string]: any }} */
    let { children, ...rest } = $props();

    let defaultClass = 'flex flex-col'
    let {classes, otherProps} = classHelper(rest || {class:''})
</script>

<div class={twMerge(defaultClass, classes)} {...otherProps}>
    {@render children()}
</div>