<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {any[]} items
     * @property {Snippet<any>} [elseSnippet]
     * @property {Snippet<any>} children
     */

    /** @type {Props & { [key: string]: any }} */
    let { items = [], elseSnippet = defaultElse, children, ...rest } = $props();

    let defaultClass = 'flex flex-col'
    let {classes, otherProps} = classHelper(rest || {class:''})
</script>

{#snippet defaultElse()}
    <div>No items in list.</div>
{/snippet}

<div class={twMerge(defaultClass, classes)} {...otherProps}>
    {#each items as item}
        {@render children(item)}
    {:else}
        {@render elseSnippet()}
    {/each}
</div>