<script>
    import { fade } from 'svelte/transition'
    import { ToastLane, addToast, removeToast } from '../components'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `        <ToastLane let:toast>
            <div class="p-2 border bg-white rounded-md" transition:fade|global={{delay: 300, duration: 300}}>
                <span>{toast.label}</span>
                <button type="button" class="float-right" on:click={() => close(toast)}>x</button>
            </div>
        </ToastLane>`

    let js = `
    function handle() {
        addToast({
            label:'Test'
        }) // a timeout can be set to automatically remove the toast.
    }

    function close(it) {
        removeToast(it._id)
    }`

    function handle() {
        addToast({
            label:'Test'
        })
    }

    function close(it) {
        removeToast(it._id)
    }
</script>

<Layout title="Generic UI - Toasts">
    <p>Asdf</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <ToastLane let:toast>
            <div class="p-2 border bg-white rounded-md" transition:fade|global={{delay: 300, duration: 300}}>
                <span>{toast.label}</span>
                <button type="button" class="float-right" on:click={() => close(toast)}>x</button>
            </div>
        </ToastLane>
        <button type="button" on:click={handle}>Click</button>
    </Example>
</Layout>