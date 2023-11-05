<script>
    import {Textarea} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let theValue = 'Some long text!'
    let js = `        let theValue = 'Some long text!'`
    let html = `        <Textarea name="text" value={theValue} />`

    function onFocus() {
        console.log("Im feeling focused!")
    }

    function onBlur() {
        console.log("Im feeling blury!")
    }
</script>

<Layout title="Generic UI - Textarea">
    <p>Textareas are exactly that. Big boxes for a lot of text. They use the same input class as inputs and selects, which brings a light border and some internal padding.</p>

    <Code>
        <pre>{js}</pre>
    </Code>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <Textarea name="text" value={theValue} on:focus={onFocus} on:blur={onBlur} />
    </Example>
</Layout>