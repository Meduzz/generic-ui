<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {string} [name]
     * @property {any} value
     * @property {string} type
     * @property {Snippet<any>} children
     */

    /** @type {Props & { [key: string]: any }} */
    let {
        name = "select1",
        value = $bindable(),
        children,
        ...rest
    } = $props();

    let defaultClass = 'p-1 w-full bg-white border'
    let {classes, otherProps} = classHelper(rest)
</script>

<select {name} bind:value={value} {...otherProps} class={twMerge(defaultClass, classes)}>
    {@render children()}
</select>
