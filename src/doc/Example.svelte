<script>
    import { twMerge } from "tailwind-merge";

    export let row = true

    let defaultClass = 'flex gap-2'
    let extraClass = row ? 'flex-col' : 'flex-row'
</script>

<div class="border-2 border-dashed border-yellow-300 p-2 mb-4">
    <div class={twMerge(defaultClass, extraClass)}>
        <slot></slot>
    </div>
    <div class="text-sm text-gray-500">Example end result:</div>
</div>