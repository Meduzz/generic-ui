<script>
    export let name
    export let label
    export let bindValue
    export let horizontal = false
    export let wrapperClass = horizontal ? 'flex flex-row gap-2 pb-2' : 'pb-2'
    export let labelClass = horizontal ? 'basis-1/4 text-right' : 'block'
    export let textareaClass = horizontal ? 'basis-3/4 border border-solid border-slate-400 px-3 py-1 w-full' : 'border border-solid border-slate-400 px-3 py-1 w-full'
</script>

<div class={wrapperClass}>
    <label for={name} class={labelClass}>{label}</label>
    <textarea {name} bind:value={bindValue} class={textareaClass} {...$$restProps}></textarea>
</div>