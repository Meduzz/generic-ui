<script>
    import { twMerge } from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {string} title
     * @property {boolean} [makePageTitle]
     */

    /** @type {Props & { [key: string]: any }} */
    let { title, makePageTitle = false, ...rest } = $props();

    let defaultClass = 'text-2xl'
    let {classes, otherProps} = classHelper(rest)
</script>

<svelte:head>
    {#if makePageTitle}
    <title>{title}</title>
    {/if}
</svelte:head>
<h1 class={twMerge(defaultClass, classes)} {...otherProps}>{title}</h1>