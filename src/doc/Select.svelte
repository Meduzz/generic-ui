<script>
    import {Select} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let items = [
        {value:"row1"},
        {value:"row2"},
        {value:"row3"}
    ]
    let value = "row3"
    let js = `        let items = [
            {value:"row1"},
            {value:"row2"},
            {value:"row3"}
        ]
        let value = "row3"`
    let html = `        <Select items={items} value={value} name="dropdown" let:item>
            <option>{item.value}</option>
        </Select>`
</script>

<Layout title="Generic UI - Select">
    <p>Select component is a standard dropdown. It is currently styled with the class input, which is also used for inputs, that have actual text input.</p>

    <Code>
        <pre>{js}</pre>
    </Code>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <Select items={items} value={value} name="dropdown" class="p-2 caret-orange-500" let:item>
            <option>{item.value}</option>
        </Select>
    </Example>
</Layout>