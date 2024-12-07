<script>
    import { Button } from '$lib'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `        <Button class="hover:underline"><span>Click</span></Button>
        <Button class="bg-pink-500 text-white">Click</Button>
        <Button class="border border-pink-500 rounded hover:bg-pink-500 hover:text-white">Click</Button>
`
</script>

<Layout title="Generic UI - buttons">
    <p>Buttons are pretty self explanatory. You get to set a label and on:click is exposed, you can style them pretty much as you'd like.</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example row={false}>
        <Button class="hover:underline"><span>Click</span></Button>
        <Button class="bg-pink-500 text-white">Click</Button>
        <Button class="border border-pink-500 rounded hover:bg-pink-500 hover:text-white">Click</Button>
    </Example>
</Layout>