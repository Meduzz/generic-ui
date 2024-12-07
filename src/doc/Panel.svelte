<script>
    import {Panel} from '$lib'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `        <Panel className="shadow-lg p-2">
            <p>Im on the inside...</p>
        </Panel>`
</script>

<Layout title="Generic UI - Panel">
    <p>The Panel component is used to encapsulate a piece of ui.</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <Panel className="shadow-lg p-2">
            <p>Im on the inside...</p>
        </Panel>
    </Example>
</Layout>