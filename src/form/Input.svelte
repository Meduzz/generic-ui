<script>
    export let name
    export let value
    export let type
    export let min
    export let max
</script>

<div>
    {#if type == 'text'}
    <input type="text" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'password'}
    <input type="password" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'number'}
    <input type="number" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'email'}
    <input type="email" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'date'}
    <input type="date" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'datetime'}
    <input type="datetime-local" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'hidden'}
    <input type="hidden" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'url'}
    <input type="url" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'time'}
    <input type="time" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'range'}
    <input type="range" name={name} bind:value={value} class="align-middle" min={min} max={max} {...$$restProps} />
    <span>{value}</span>
    {:else if type == 'color'}
    <input type="color" name={name} bind:value={value} {...$$restProps} />
    {:else if type == 'tel'}
    <input type="tel" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else if type == 'search'}
    <input type="search" name={name} bind:value={value} class="input" {...$$restProps} />
    {:else}
    <span {...$$restProps}>{value}</span>
    {/if}
</div>