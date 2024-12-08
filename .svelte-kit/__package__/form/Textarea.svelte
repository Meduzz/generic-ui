<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {string} [name]
     * @property {any} value
     */

    /** @type {Props & { [key: string]: any }} */
    let { name = "textarea1", value = $bindable(), ...rest } = $props();

    let defaultClass = 'resize p-1 w-full border'
    let {classes, otherProps} = classHelper(rest)
</script>

<textarea {name} bind:value={value} {...otherProps} class={twMerge(defaultClass, classes)}></textarea>
