<script context="module">
    import {writable} from 'svelte/store'

    const toasts = writable([])

    export function addToast(data, timeout) {
        toasts.update(old => {
            data._id = crypto.randomUUID()
            return old.concat(data)
        })

        if (timeout) {
            setTimeout(() => {
                toasts.update(old => old.filter(it => it._id != data._id))
            }, timeout * 1000)
        }
    }

    export function removeToast(id) {
        toasts.update(old => {
            return old.filter(it => it._id != id)
        })
    }
</script>

<div class="fixed right-0 top-0 h-screen w-48 p-4 flex flex-col-reverse gap-2">
    {#each $toasts as toast}
        <slot {toast}></slot>
    {/each}
</div>