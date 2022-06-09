<script>
    export let name
    export let label
    export let bindValue
    export let type
    export let horizontal = false
    export let wrapperClass = horizontal ? 'flex flex-row gap-2 pb-2' : 'pb-2'
    export let labelClass = horizontal ? 'basis-1/4 text-right' : 'block'
    export let inputClass = horizontal ? 'basis-3/4 border border-solid border-slate-400 px-3 py-1 w-full' : 'border border-solid border-slate-400 px-3 py-1 w-full'
</script>

<div class={wrapperClass}>
    <label for={name} class={labelClass}>{label}</label>
    {#if type == 'text'}
    <input type="text" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'password'}
    <input type="password" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'number'}
    <input type="number" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'email'}
    <input type="email" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'date'}
    <input type="date" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'datetime'}
    <input type="datetime" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'hidden'}
    <input type="hidden" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'url'}
    <input type="url" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'time'}
    <input type="time" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'range'}
    <input type="range" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    <span>{bindValue}</span>
    {:else if type == 'color'}
    <input type="color" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else if type == 'tel'}
    <input type="tel" name={name} bind:value={bindValue} class={inputClass} {...$$restProps} />
    {:else}
    <span {...$$restProps}>{bindValue}</span>
    {/if}
</div>