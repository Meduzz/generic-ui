<script>
    import {Button} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `            <Button label="Click" class="bg-sky-500 text-white" />
            <Button label="Click" class="bg-pink-500 text-white" />
            <Button label="Click" class="border border-pink-500 rounded hover:bg-pink-500 hover:text-white" />
`
</script>

<Layout title="Generic UI - buttons">
    <p>Buttons are pretty self explanatory. You get to set a label and on:click is exposed, you can style them pretty much as you'd like.</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example row={false}>
        <Button label="Click" class="bg-sky-500 text-white" />
        <Button label="Click" class="bg-pink-500 text-white" />
        <Button label="Click" class="border border-pink-500 rounded hover:bg-pink-500 hover:text-white" />
    </Example>
</Layout>