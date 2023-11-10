<script>
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'
    import {default as SplitView, select} from '../layout/SplitView.svelte'

    let html = `        <SplitView loader={loadPage} let:item let:detail>
            <svelte:fragment slot="listview">
                <div>
                    <button on:click={() => select(item)}>{item.label}</button>
                </div>
            </svelte:fragment>
            <svelte:fragment slot="detailview">
                {#if detail}
                <div>Details for {detail.label}</div>
                {/if}
            </svelte:fragment>
        </SplitView>`
    let js = `    let count = 0

    function loadPage(skip, take) {
        return new Promise((resolve) => {
            let items = []
            for (let i = 1; i < 101; i++) {
                count++
                items = items.concat({
                    label: \`Item \${count}\`
                })
            }

            resolve(items)
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

            resolve(items)
        })
    }
</script>

<Layout title="Split view">
    <p>SplitView lets you divide a page with one list view, based on ListView component and one detail view, which is a blank canvas for you render the details how ever you'd like. To sync data between the ListView and the detail view, you use the select method exported by the SplitView component.</p>
    <Code language="html">
        <pre>{html}</pre>
    </Code>
    <Code>
        <pre>{js}</pre>
    </Code>
    <Example>
        <SplitView loader={loadPage} let:item let:detail>
            <svelte:fragment slot="listview">
                <div>
                    <button on:click={() => select(item)}>{item.label}</button>
                </div>
            </svelte:fragment>
            <svelte:fragment slot="detailview">
                {#if detail}
                <div>Details for {detail.label}</div>
                {/if}
            </svelte:fragment>
        </SplitView>
    </Example>
</Layout>