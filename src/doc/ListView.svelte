<script>
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'
    import ListView from '../layout/ListView.svelte'

    let html =  `        <ListView loader={loadPage} let:item>
            <div>{item.label}</div>
            <svelte:fragment slot="loading">
                <p>Going bananas!!</p>
            </svelte:fragment>
        </ListView>`
    let js = `    function loadPage(skip, take) {
        return new Promise((resolve) => {
            let items = []
            for (let i = 1; i < 101; i++) {
                count++
                items = items.concat({
                    label: \`Item \${count}\`
                })
            }

            setTimeout(() => {
                resolve(items)
            }, 1000)
        })
    }`
    let count = 0

    function loadPage(skip, take) {
        return new Promise((resolve) => {
            let items = []
            for (let i = 1; i < 101; i++) {
                count++
                items = items.concat({
                    label: `Item ${count}`
                })
            }

            setTimeout(() => {
                resolve(items)
            }, 1000)
        })
    }
</script>

<Layout title="List view">
    <p>ListView when fed with a loader function, takes care of the pagination and let you focus on how to render the list.</p>
    <Code language="html">
        <pre>{html}</pre>
    </Code>
    <Code>
        <pre>{js}</pre>
    </Code>
    <Example>
        <ListView loader={loadPage} let:item>
            <div>{item.label}</div>
        </ListView>
    </Example>
</Layout>