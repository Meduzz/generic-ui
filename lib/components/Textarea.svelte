<script>
    export let name
    export let label
    export let bindValue
    export let wrapperClass = 'pb-2'
    export let labelClass = 'block'
    export let textareaClass = 'border border-solid border-slate-400 px-3 py-1 w-full'
</script>

<div class={wrapperClass}>
    <label for={name} class={labelClass}>{label}</label>
    <textarea {name} bind:value={bindValue} class={textareaClass} {...$$restProps}></textarea>
</div>