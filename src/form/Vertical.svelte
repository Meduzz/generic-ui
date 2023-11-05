<script>
    import {twMerge} from 'tailwind-merge'

    export let label
    export let labelClass
    export let wrapperClass

    export let defaultLabelClass = 'block px-1'
    export let defaultWrapperClass = 'block'
</script>

<div class="py-1">
    <label class={twMerge(defaultLabelClass, labelClass)}>{label}</label>
    <div class={twMerge(defaultWrapperClass, wrapperClass)}>
        <slot></slot>
    </div>
</div>