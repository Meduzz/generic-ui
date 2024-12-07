<script>
    import {Header} from '$lib'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `    <Header title="Fancy title!" makePageTitle={false} />
`
</script>

<Layout title="Generic UI - headers">
    <p>Headers are basically h1 with a small twist, it also can set the page title through the property `makePageTitle`. It adds no padding or margin.</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <Header title="Fancy title!" class="underline" makePageTitle={false} />
    </Example>
</Layout>