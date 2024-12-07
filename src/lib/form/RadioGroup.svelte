<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} RadioItem
     * @property {any} value
     * @property {string} label
     * 
     * @typedef {Object} Props
     * @property {RadioItem[]} items
     * @property {any[]} value
     * @property {string} name
     */

    /** @type {Props & { [key: string]: any }} */
    let { items = [], value = $bindable(), name, ...rest } = $props();

    let defaultClass = 'block'
    let {classes, otherProps} = classHelper(rest)
</script>

<div>
    {#each items as item}
        <label class={twMerge(defaultClass, classes)}>
            <input type="radio" {name} value={item.value} bind:group={value} {...otherProps} />
            {item.label}
        </label>
    {/each}
</div>
