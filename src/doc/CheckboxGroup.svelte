<script>
    import {CheckboxGroup} from '$lib'
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
    let values = $state([1,2])

    let js = `        let items = [
            {
                label: 'One',
                value: 1
            }, {
                label: 'Two',
                value: 2
            }
        ]

        let values = [1,2]`
    let html = `        <CheckboxGroup items={items} bind:values={values} name="checkboxez" />`
</script>

<Layout title="Generic UI - Checkbox group">
    <p>Checkbox groups allow you to select several in a group of values. To render the checkbox group a list of objects with label and value properties are needed. Currently the label encapsulating the checkbox is set to blocking.</p>

    <Code>
        <pre>{js}</pre>
    </Code>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <CheckboxGroup items={items} bind:values={values} name="checkboxez" />
    </Example>
</Layout>