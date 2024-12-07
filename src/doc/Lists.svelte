<script>
    import {ListX, ListY} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let js = `    let items = [
        'First',
        'Second',
        'Third'
    ]`
    let htmlx = `        <ListX {items} let:item>
            <div class="mr-2">{item}</div>
        </ListX>`
    let htmly = `        <ListY class="gap-2" {items} let:item>
            <div>{item}</div>
        </ListY>`

    let items = [
        'First',
        'Second',
        'Third'
    ]
</script>

<Layout title="Generic UI - Lists">
    <p>ListX and ListY components lets you do pretty lists in X and Y led.</p>

    <Code>
        <pre>{js}</pre>
    </Code>

    <Code language="html (listx)">
        <pre>{htmlx}</pre>
    </Code>

    <Example>
        <ListX {items} >
            {#snippet children({ item })}
                <div class="mr-2">{item}</div>
            {/snippet}
        </ListX>
    </Example>

    <Code language="html (listy)">
        <pre>{htmly}</pre>
    </Code>

    <Example>
        <ListY class="gap-2" {items} >
            {#snippet children({ item })}
                <div>{item}</div>
            {/snippet}
        </ListY>
    </Example>
</Layout>