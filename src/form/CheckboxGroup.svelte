<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} CheckboxItem
     * @property {any} value
     * @property {string} label
     * 
     * @typedef {Object} Props
     * @property {CheckboxItem[]} items
     * @property {any[]} values
     * @property {string} name
     */

    /** @type {Props & { [key: string]: any }} */
    let { items = [], values = $bindable([]), name, ...rest } = $props();

    let defaultClass = 'block'
    let {classes, otherProps} = classHelper(rest)
</script>

<div>
    {#each items as item}
        <label class={twMerge(defaultClass, classes)}>
            <input type="checkbox" {name} value={item.value} bind:group={values} {...otherProps} />
            {item.label}
        </label>
    {/each}
</div>