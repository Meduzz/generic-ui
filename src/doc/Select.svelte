<script>
    import {Select} from '$lib'
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
    let html = `        <Select onchange={logChange} {items} {value} name="dropdown" class="p-2 caret-orange-500" >
            {#snippet children(item)}
                <option>{item.value}</option>
            {/snippet}
        </Select>`

    function logChange() {
        console.log("I changed")
    }
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
        <Select onchange={logChange} {items} {value} name="dropdown" class="p-2 caret-orange-500" >
            {#snippet children(item)}
                <option>{item.value}</option>
            {/snippet}
        </Select>
    </Example>
</Layout>