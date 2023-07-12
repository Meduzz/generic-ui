<script>
    export let language = 'js'
</script>

<div class="border-2 border-solid border-black bg-slate-300 p-2 mb-4">
    <slot></slot>
    <div class="text-sm text-gray-500">Example code ({language}):</div>
</div>