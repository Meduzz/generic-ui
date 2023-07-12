<script>
    import {Table} from '@chimps/genericui'
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

    let html = `        <Table rows={items} class="bg-pink-200">
            <tr slot="header">
                <th>Item</th>
                <th>Quantity</th>
            </tr>
            <tr slot="body" class="odd:bg-slate-300" let:item>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
            </tr>
            <tr slot="footer">
                <td>-</td>
                <td>4</td>
            </tr>
        </Table>
`
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
        <Table rows={items} class="bg-pink-200">
            <tr slot="header">
                <th>Item</th>
                <th>Quantity</th>
            </tr>
            <tr slot="body" class="odd:bg-slate-300" let:item>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
            </tr>
            <tr slot="footer">
                <td>-</td>
                <td>4</td>
            </tr>
        </Table>
    </Example>
</Layout>