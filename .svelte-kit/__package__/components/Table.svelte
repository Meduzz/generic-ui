<script>
    import { twMerge } from 'tailwind-merge'
    import {classHelper} from '../helper'

    /*
     * TODO
     * - Get this component backed by a headless table
     * - Also accept columns list and make something smarter with thead, tbody & tfoot?
     */

    /**
     * @typedef {Object} Props
     * @property {any[]} rows
     * @property {Snippet} header
     * @property {Snippet<any>} body
     * @property {Snippet} footer
     */

    /** @type {Props & { [key: string]: any }} */
    let {
        rows,
        header,
        body,
        footer,
        ...rest
    } = $props();

    let defaultClass = 'border'
    let {classes, otherProps} = classHelper(rest)
</script>

<table class={twMerge(defaultClass, classes)} {...otherProps}>
    <thead>
        {@render header()}
    </thead>
    <tbody>
    {#each rows as item}
        {@render body(item)}
    {/each}
    </tbody>
    <tfoot>
        {@render footer()}
    </tfoot>
</table>