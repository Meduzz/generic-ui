<script>
    import {Text} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `    <Text text="It's really simple, really!" class="bg-pink-200" />
`
</script>

<Layout title="Generic UI - Text">
    <p>Text is a simple span that can be placed where needed. It will not add any padding or margin.</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>>

    <Example>
        <Text text="It's really simple, really!" class="bg-pink-200" />
    </Example>
</Layout>