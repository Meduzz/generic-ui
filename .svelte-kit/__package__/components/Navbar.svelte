<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} MenuItem
     * @typedef {string} href
     * @typedef {string} label
     * 
     * @typedef {Object} Props
     * @property {MenuItem[]} [items]
     * @property {Snippet} [brand]
     */

    /** @type {Props & { [key: string]: any }} */
    let { items = [], brand, ...rest } = $props();

    let defaultClass = 'py-3 px-2 flex sm:flex-row flex-col' 
    let {classes, otherProps} = classHelper(rest)
    let showItems = $state(true)

    function toggle() {
        showItems = !showItems
    }
</script>
        
<nav class="{twMerge(defaultClass, classes)}">
    <div class="sm:basis-1/2 flex-1 flex flex-row gap-2">
        <div class="sm:hidden text-2xl flex-shrink">
            <button type="button" onclick={toggle}>&equiv;</button>
        </div>
        <div class="flex-grow">
        {#if brand}
            {@render brand()}
        {/if}
        </div>
    </div>
    {#if showItems}
    <div class="sm:basis-1/2 sm:my-auto basis-full">
        <menu class="sm:float-right divide-y sm:divide-x sm:divide-y-0 flex flex-col sm:flex-row">
            {#each items as item}
                <li class="basis-full sm:px-2 sm:flex-1">
                    <a href="{item.href}">{item.label}</a>
                </li>
            {/each}
        </menu>
    </div>
    {/if}
</nav>