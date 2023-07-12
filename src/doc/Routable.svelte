<script>
    import {Routable, Panel, Column, Columns, Rows, Row} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `        <Rows>
            <Row>
                <Columns>
                    <Column>
                        <div class="hover:bg-red-300">
                            <a href="/routable">Home</a>
                        </div>
                    </Column>
                    <Column>
                        <div class="hover:bg-red-300">
                            <a href="/routable/page2">Page 2</a>
                        </div>
                    </Column>
                </Columns>
            </Row>
            <Row>
                <Routable path="/">
                    <Panel>Default page.</Panel>
                </Routable>
                <Routable path="/page2">
                    <Panel>Page 2.</Panel>
                </Routable>
            </Row>
        </Rows>`
</script>

<Layout title="Generic UI - Routable">
    <p>The routable component allow you to have a section of the page display different content depending on the url. It is a wrapper around a <a class="underline" href="https://github.com/AlexxNB/tinro#exact-path">Tinro router</a>.</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <Rows>
            <Row>
                <Columns>
                    <Column>
                        <div class="hover:bg-red-300">
                            <a href="/routable">Home</a>
                        </div>
                    </Column>
                    <Column>
                        <div class="hover:bg-red-300">
                            <a href="/routable/page2">Page 2</a>
                        </div>
                    </Column>
                </Columns>
            </Row>
            <Row>
                <Routable path="/">
                    <Panel>Default page.</Panel>
                </Routable>
                <Routable path="/page2">
                    <Panel>Page 2.</Panel>
                </Routable>
            </Row>
        </Rows>
    </Example>
</Layout>