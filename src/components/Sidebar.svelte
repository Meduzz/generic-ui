<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /*
     * TODO
     * - Remove background color
     * - Make size stable, ie not resizing depending on neighbour
     */

    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet<[any]>} [children]
     */

    /** @type {Props & { [key: string]: any }} */
    let { children, ...rest } = $props();

    let defaultClass = 'bg-slate-300 p-2'
    let {classes, otherProps} = classHelper(rest || {class:''})
</script>

<div class={twMerge(defaultClass, classes)}>
    {@render children({ ...otherProps, })}
</div>