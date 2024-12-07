<script>
    import {twMerge} from 'tailwind-merge'
    import {classHelper} from '../helper'

    /**
     * @typedef {Object} Props
     * @property {string} name
     * @property {any} value
     * @property {string} type
     */

    /** @type {Props & { [key: string]: any }} */
    let {
        name,
        value = $bindable(),
        type,
        ...rest
    } = $props();

    let defaultClass = 'p-1 border-b w-full'
    let {classes, otherProps} = classHelper(rest)
</script>

{#if type == 'text'}
<input type="text" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'password'}
<input type="password" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'number'}
<input type="number" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'email'}
<input type="email" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'date'}
<input type="date" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'datetime'}
<input type="datetime-local" name={name} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'hidden'}
<input type="hidden" name={name} bind:value={value}  class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'url'}
<input type="url" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'time'}
<input type="time" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'range'}
<input type="range" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
<span>{value}</span>
{:else if type == 'color'}
<input type="color" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'tel'}
<input type="tel" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else if type == 'search'}
<input type="search" name={name} bind:value={value} class={twMerge(defaultClass, classes)} {...otherProps} />
{:else}
<span class={twMerge(defaultClass, classes)} {...otherProps}>{value}</span>
{/if}
