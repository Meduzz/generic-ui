<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'
    import {createEventDispatcher} from 'svelte'

    /*
     * TODO
     * - remove visible (toggle & resize) logic
     * - make turn menuItems to a vertical list on xs and keep as horizontal list on sm up
     * - remove all colors and font formatting
     * - make brand a snippet
     */

    /**
     * @typedef {Object} MenuItem
     * @typedef {string} href
     * @typedef {string} label
     * 
     * @typedef {Object} Props
     * @property {MenuItem[]} [items]
     * @property {string} [brand]
     */

    /** @type {Props & { [key: string]: any }} */
    let { items = [], brand = null, ...rest } = $props();

    const dispatch = createEventDispatcher()

    let visible = $state(true)

    let defaultClass = 'py-3 px-4 bg-slate-700 text-white font-bold flex flex-row flex-wrap sm:flex-nowrap' 
    let {classes, otherProps} = classHelper(rest)
    
    function toggle() {
        let old = visible

        if (window.outerWidth < 640) {
            visible = !visible
        } else {
            visible = true
        }

        if (old != visible) {
            dispatch('toggle')
        }
    }
    
    function resize() {
        let old = visible

        if (window.outerWidth < 640) {
            visible = false
        } else {
            visible = true
        }

        if (old != visible) {
            dispatch('toggle')
        }
    }
    
    toggle()
    </script>
    
    <svelte:window onresize={resize}></svelte:window>
    
    <nav class="{twMerge(defaultClass, classes)}">
        <div class="sm:basis-1/2 flex-1">
            <div class="sm:hidden inline text-3xl">
                <button type="button" onclick={toggle}>&equiv;</button>
            </div>
            {#if brand}
            <h1 class="text-2xl inline">{brand}</h1>
            {/if}
        </div>
        <div class="sm:basis-1/2 sm:my-auto basis-full">
            {#if visible}
            <div class="sm:float-right divide-y sm:divide-x sm:divide-y-0 flex flex-col sm:flex-row">
                {#each items as item}
                    <div class="basis-full px-2 sm:flex-1">
                        <a href="{item.href}">{item.label}</a>
                    </div>
                {/each}
            </div>
            {/if}
        </div>
    </nav>