<script>
    import { Sidebar } from '$lib'
    import { ListY } from '$lib'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let items = ['Row1', 'Row2', 'Row3']

    let js = `    let items = ['Row1', 'Row2', 'Row3']`
    let html = `        <Sidebar>
            <ListY>
                <div>Row1</div>
                <div>Row2</div>
                <div>Row3</div>
            </ListY>
        </Sidebar>`
</script>

<Layout title="Generic UI - Sidebar">
    <p>Base Sidebar will appear to the left, with the same height as the screen. Have w-48, p-4 & z-1. It has a slot where you can add what ever you need.</p>

    <Code>
        <pre>{js}</pre>
    </Code>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <Sidebar>
            <ListY {items}>
                {#snippet children(item)}
                    <div>{item}</div>
                {/snippet}
            </ListY>
        </Sidebar>
    </Example>
</Layout>