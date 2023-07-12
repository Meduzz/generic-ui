<script>
    import {SubHeader} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `    <SubHeader title="Sub header" class="underline" />
`
</script>

<Layout title="Generic UI - Sub headers">
    <p>Sub headers are simply an h3 tag. They are sparsely styled and will use up all x led space.</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <SubHeader title="Sub header" class="underline" />
    </Example>
</Layout>