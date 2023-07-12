<script>
    import {RadioGroup} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let items = [
        {
            label: 'One',
            value: 1
        }, {
            label: 'Two',
            value: 2
        }
    ]
    let value = 2

    let js = `        let items = [
            {
                label: 'One',
                value: 1
            }, {
                label: 'Two',
                value: 2
            }
        ]

        let value = 2`
    let html = `        <RadioGroup items={items} bind:value={value} />`
</script>

<Layout title="Generic UI - Radio group">
    <p>Radio groups allow you to select one in a group of values. To render the radio group a list of objects with label and value properties are needed. Currently the label encapsulating the radio button is set to blocking.</p>

    <Code>
        <pre>{js}</pre>
    </Code>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <RadioGroup items={items} bind:value={value} />
    </Example>
</Layout>