<script>
    import {writable} from 'svelte/store'

    const list = writable([])
    export let loader

    let skip = 0
    let take = 15
    let count = 0
    let loading = loader(skip, take)
        .then(it => {
            list.update(old => {
                return old.concat(it)
            })

            count = $list.length
        })

    function next() {
        loading = new Promise((resolve, reject) => {
            skip = skip + take

            if (skip + take > count) {
                loader(skip, take)
                    .then(it => {
                        list.update(old => {
                            return old.concat(it)
                        })

                        count = $list.length
                        resolve([])
                    }).catch(err => {
                        reject(err)
                    })
            } else {
                resolve([])
            }
        })
    }

    function prev() {
        loading = new Promise((resolve, reject) => {
            skip = skip - take

            if (skip < 0) {
                skip = 0
            }
            
            resolve()
        })
    }

    function start() {
        loading = new Promise((resolve) => {
            skip = 0

            resolve()
        })
    }

    function subList() {
        return $list.slice(skip, skip + take)
    }
</script>

<div>
    {#await loading}
        <slot name="loading"><p>Loading...</p></slot>
    {:then}
    {#each subList() as item}
        <slot {item}></slot>
    {:else}
        <div>Empty list...</div>
    {/each}
    {/await}
    <div class="mt-2">
        <button type="button" on:click={start}>|&lt;</button>
        <button type="button" on:click={prev}>&lt;</button>
        <button type="button" on:click={next}>&gt;</button>
        <slot name="actions"></slot>
    </div>
</div>