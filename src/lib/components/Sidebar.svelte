<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet<[any]>} [children]
     */

    /** @type {Props & { [key: string]: any }} */
    let { children, ...rest } = $props();

    let defaultClass = 'p-2'
    let {classes, otherProps} = classHelper(rest || {class:''})
</script>

<aside class={twMerge(defaultClass, classes)}>
    {@render children({ ...otherProps, })}
</aside>