<script>
    import {Rows, Row} from '$lib'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html2 = `        <Rows>
            <Row>Im half the space</Row>
            <Row>Im the other half</Row>
        </Rows>`
    let html3 = `        <Rows>
            <Row>Im one third</Row>
            <Row>Im one third too</Row>
            <Row>Im one third also</Row>
        </Rows>`
</script>

<Layout title="Generic UI - Rows & Row">
    <p>Rows and Row components are used to divide some space in rows, as rows are added the space needed grows too. While rows grow in y led, they also consume all space in x led. Neither Rows or Row applies any padding or margin but a gap is added between each item.</p>


    <Code language="html">
        <pre>{html2}</pre>
    </Code>

    <Example>
        <Rows>
            <Row>Im half the space</Row>
            <Row>Im the other half</Row>
        </Rows>
    </Example>

    <Code language="html">
        <pre>{html3}</pre>
    </Code>

    <Example>
        <Rows>
            <Row>Im one third</Row>
            <Row>Im one third too</Row>
            <Row>Im one third also</Row>
        </Rows>
    </Example>
</Layout>