<script>
    /**
     * @typedef {Object} Props
     * @property {string} [language]
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { language = 'js', children } = $props();
</script>

<div class="border-2 border-solid border-black bg-slate-300 p-2 mb-4">
    {@render children()}
    <div class="text-sm text-gray-500">Example code ({language}):</div>
</div>