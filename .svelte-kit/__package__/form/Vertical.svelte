<script>
    import {twMerge} from 'tailwind-merge'

    let defaultLabelClass = 'block px-1'
    let defaultWrapperClass = 'block'

    /**
     * @typedef {Object} Props
     * @property {string} label
     * @property {string} labelClass
     * @property {string} wrapperClass
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let {
        label,
        labelClass,
        wrapperClass,
        children
    } = $props();
</script>

<div class="py-1">
    <label class={twMerge(defaultLabelClass, labelClass)}>{label}</label>
    <div class={twMerge(defaultWrapperClass, wrapperClass)}>
        {@render children()}
    </div>
</div>