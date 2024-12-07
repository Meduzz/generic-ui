<script>
    import {Markdown, Columns, Column} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let inMd = `# Hello world\n* **Gief 1**\n* ~~Gief 2~~`
    let outMd = $state(inMd)

    let editor = `        <Markdown editing={true} markdown={inMd} on:updated={updated} />`
    let render = `        <Markdown editing={false} markdown={finalMd} />`
    let js = `    let inMd = "# Hello world\n* **Gief 1**\n* ~~Gief 2~~"

    let finalMd = inMd

    function updated(it) {
        finalMd = it.detail
    }
`

    function updated(it) {
        outMd = it.detail
    }
</script>

<Layout title="Generic UI - Markdown">
    <p>Markdown component can run in two modes, either as editor or as display. Editor mode is enabled by setting editing to true. Then updates to the markdown will be sent via the updated trigger. Any initial markdown can be sent in markdown property.</p>

    <p>In display mode, set editing to false. No updates will be sent in updated trigger. And only markdown submitted in markdown property will be rendered.</p>

    <p>Both editor and display will consume all x led space they can get and as much y led space as they need. Which roughly translates into number of lines of markdown.</p>

    <Code>
        <pre>{js}</pre>
    </Code>

    <Code language="html (editing)">
        <pre>{editor}</pre>
    </Code>

    <Code language="html (rendering)">
        <pre>{render}</pre>
    </Code>

    <Example>
        <Columns>
            <Column>
                <Markdown editing={true} markdown={inMd} on:updated={updated} />
            </Column>
            <Column>
                <Markdown editing={false} markdown={outMd} />
            </Column>
        </Columns>
    </Example>
</Layout>