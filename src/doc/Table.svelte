<script>
    import {Table} from '$lib'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let items = [
        {
            item:"Butter",
            quantity: 1
        },{
            item: "Cheese",
            quantity: 2
        },{
            item:"Ham",
            quantity: 1
        }
    ]

    let html = `        <Table rows={items}>
            {#snippet header()}
                <tr class="bg-black text-white text-left">
                    <th class="px-1">Item</th>
                    <th class="px-1">Quantity</th>
                </tr>
            {/snippet}
            {#snippet body(item)}
                <tr class="odd:bg-slate-300" >
                    <td class="px-1">{item.item}</td>
                    <td class="px-1">{item.quantity}</td>
                </tr>
            {/snippet}
            {#snippet footer()}
                <tr class="bg-sky-300">
                    <td class="px-1">-</td>
                    <td class="px-1">4</td>
                </tr>
            {/snippet}
        </Table>`
    let js = `        let items = [
            {
                item:"Butter",
                quantity: 1
            },{
                item: "Cheese",
                quantity: 2
            },{
                item:"Ham",
                quantity: 1
            }
        ]
`
</script>

<Layout title="Generic UI - Tables">
    <p>Tables are... tables with a splash of SvelteJS. It does not add any margin or padding, however it will take all X led space it is given.</p>

    <Code>
        <pre>{js}</pre>
    </Code>

    <Code>
        <pre>{html}</pre>
    </Code>

    <Example>
        <Table rows={items}>
            {#snippet header()}
                <tr class="bg-black text-white text-left">
                    <th class="px-1">Item</th>
                    <th class="px-1">Quantity</th>
                </tr>
            {/snippet}
            {#snippet body(item)}
                <tr class="odd:bg-slate-300" >
                    <td class="px-1">{item.item}</td>
                    <td class="px-1">{item.quantity}</td>
                </tr>
            {/snippet}
            {#snippet footer()}
                <tr class="bg-sky-300">
                    <td class="px-1">-</td>
                    <td class="px-1">4</td>
                </tr>
            {/snippet}
        </Table>
    </Example>
</Layout>