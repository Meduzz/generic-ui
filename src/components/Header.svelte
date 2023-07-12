<script>
    import { twMerge } from 'tailwind-merge'
    import {classHelper} from '../helper'

    export let title
    export let makePageTitle = false

    let defaultClass = 'text-2xl'
    let {classes, otherProps} = classHelper($$restProps)
</script>

<svelte:head>
    {#if makePageTitle}
    <title>{title}</title>
    {/if}
</svelte:head>
<h1 class={twMerge(defaultClass, classes)} {...otherProps}>{title}</h1>