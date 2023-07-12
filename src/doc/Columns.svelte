<script>
    import {Columns, Column} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html2 = `        <Columns>
            <Column>Im half the space</Column>
            <Column>Im the other half</Column>
        </Columns>`
    let html3 = `        <Columns>
            <Column>Im one third</Column>
            <Column>Im one third too</Column>
            <Column>Im one third also</Column>
        </Columns>`
</script>

<Layout title="Generic UI - Columns & Column">
    <p>Columns and Column components are used to divide the available space in columns. Neither Columns or Column applies any padding or margin but a gap is added between each item.</p>

    <Code language="html">
        <pre>{html2}</pre>
    </Code>
    
    <Example>
        <Columns>
            <Column>Im half the space</Column>
            <Column>Im the other half</Column>
        </Columns>
    </Example>

    <Code language="html">
        <pre>{html3}</pre>
    </Code>

    <Example>
        <Columns>
            <Column>Im one third</Column>
            <Column>Im one third too</Column>
            <Column>Im one third also</Column>
        </Columns>
    </Example>
</Layout>