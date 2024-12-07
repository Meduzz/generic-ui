<script>
    import { twMerge } from "tailwind-merge";

    /**
     * @typedef {Object} Props
     * @property {boolean} [row]
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { row = true, children } = $props();

    let defaultClass = 'flex gap-2'
    let extraClass = row ? 'flex-col' : 'flex-row'
</script>

<div class="border-2 border-dashed border-yellow-300 p-2 mb-4">
    <div class={twMerge(defaultClass, extraClass)}>
        {@render children()}
    </div>
    <div class="text-sm text-gray-500">Example end result:</div>
</div>