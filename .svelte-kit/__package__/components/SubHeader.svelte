<script>
    import { twMerge } from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {string} title
     */

    /** @type {Props & { [key: string]: any }} */
    let { title, ...rest } = $props();

    let defaultClass = 'text-xl'
    let {classes, otherProps} = classHelper(rest)
</script>

<h3 class={twMerge(defaultClass, classes)} {...otherProps}>{title}</h3>