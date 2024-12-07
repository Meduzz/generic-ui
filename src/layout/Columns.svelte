<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet<[any]>} [children]
     */

    /** @type {Props & { [key: string]: any }} */
    let { children, ...rest } = $props();

    let defaultClass = 'flex flex-row gap-2'
    let {classes, otherProps} = classHelper(rest)
</script>

<div class={twMerge(defaultClass, classes)}>
    {@render children({ ...otherProps })}
</div>