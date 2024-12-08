<script>
    import {ListX, ListY} from '$lib'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let js = `    let items = [
        'First',
        'Second',
        'Third'
    ]`
    let htmlx = `        <ListX class="gap-2">
            {#each items as item}
                <div class="mr-2">{item}</div>
            {/each}
        </ListX>`
    let htmly = `        <ListY class="gap-2">
            {#each items as item}
                <div>{item}</div>
            {/each}
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
        <ListX class="gap-2">
            {#each items as item}
                <div class="mr-2">{item}</div>
            {/each}
        </ListX>
    </Example>

    <Code language="html (listy)">
        <pre>{htmly}</pre>
    </Code>

    <Example>
        <ListY class="gap-2">
            {#each items as item}
                <div>{item}</div>
            {/each}
        </ListY>
    </Example>
</Layout>