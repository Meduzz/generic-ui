<script>
    import {twMerge} from 'tailwind-merge'

    export let label
    export let labelClass
    export let wrapperClass

    export let defaultLabelClass = 'basis-1/4 px-1'
    export let defaultWrapperClass = 'basis-3/4'
</script>

<div class="flex flex-row py-1">
    <div class={twMerge(defaultLabelClass, labelClass)}>
        <label>{label}</label>
    </div>
    <div class={twMerge(defaultWrapperClass, wrapperClass)}>
        <slot></slot>
    </div>
</div>