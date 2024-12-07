<script>
    import {twMerge} from 'tailwind-merge'

    let defaultLabelClass = 'basis-1/4 px-1'
    let defaultWrapperClass = 'basis-3/4'

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

<div class="flex flex-row py-1">
    <div class={twMerge(defaultLabelClass, labelClass)}>
        <label>{label}</label>
    </div>
    <div class={twMerge(defaultWrapperClass, wrapperClass)}>
        {@render children()}
    </div>
</div>