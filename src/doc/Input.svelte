<script>
    import {Input} from '@chimps/genericui'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let html = `        <Input type="text" value="text" class="py-1" />
        <Input type="password" value="text" class="py-1" />
        <Input type="number" value="42" class="py-1" />
        <Input type="email" value="pii@protect.eu" class="py-1" />
        <Input type="date" value="1999-12-31" class="py-1" />
        <Input type="datetime" value="1999-12-31 23:59:59" class="py-1" />
        <Input type="hidden" value="find me?" class="py-1" />
        <Input type="url" value="https://github.com" class="py-1" />
        <Input type="time" value="23:59:59" class="py-1" />
        <Input type="range" value="50" min="1" max="100" class="py-1" />
        <Input type="color" value="#c3c3c3" class="py-1" />
        <Input type="tel" value="+46123456789" class="py-1" />
        <Input type="search" value="Find stuff" class="py-1" />`
</script>

<Layout title="Generic UI - Inputs">
    <p>Input component allows for variuos input fields (not checkboxes, radiobuttons, image, month, week and files) to be generated.</p>

    <Code language="html">
        <pre>{html}</pre>
    </Code>

    <Example>
        <Input type="text" value="text" class="py-1" />
        <Input type="password" value="text" class="py-1" />
        <Input type="number" value="42" class="py-1" />
        <Input type="email" value="pii@protect.eu" class="py-1" />
        <Input type="date" value="1999-12-31" class="py-1" />
        <Input type="datetime" value="1999-12-31 23:59:59" class="py-1" />
        <Input type="hidden" value="find me?" class="py-1" />
        <Input type="url" value="https://github.com" class="py-1" />
        <Input type="time" value="23:59:59" class="py-1" />
        <Input type="range" value="50" min="1" max="100" class="py-1" />
        <Input type="color" value="#c3c3c3" class="py-1" />
        <Input type="tel" value="+46123456789" class="py-1" />
        <Input type="search" value="Find stuff" class="py-1" />
    </Example>
</Layout>