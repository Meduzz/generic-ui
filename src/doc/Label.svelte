<script>
    import {Input, Horizontal, Vertical, Select, Textarea} from '../form'
    import Layout from './Layout.svelte'
    import Code from './Code.svelte'
    import Example from './Example.svelte'

    let items = [
        {
            label: 'Item1',
            value: 'Item1'
        },{
            label: 'Item2',
            value: 'Item2'
        }
    ]

    let horizontal = `        <Horizontal label="Horizontal text:" labelClass="text-pink-500">
            <Input type="text" placeholder="Some text..." />
        </Horizontal>
        <Horizontal label="Horizontal select:">
            <Select items={items} let:item>
                <option value={item.value}>{item.label}</option>
            </Select>
        </Horizontal>
        <Horizontal label="Horizontal textarea:">
            <Textarea placeholder="I have room for a big chunk of text!11"></Textarea>
        </Horizontal>`

    let vertical = `        <Example>
            <Vertical label="Vertical text:">
                <Input type="text" placeholder="Some text..." />
            </Vertical>
            <Vertical label="Vertical select:">
                <Select items={items} let:item>
                    <option value={item.value}>{item.label}</option>
                </Select>
            </Vertical>
            <Vertical label="Vertical textarea:">
                <Textarea placeholder="I have room for a big chunk of text!11"></Textarea>
            </Vertical>
        </Example>`
</script>

<Layout title="Generic UI - Labels">
    <section class="pb-2">
        <p>Labels handles positioning of the label contra the components (input, select & textarea). It comes in 2 variants, horizontal and vertical. In horizontal form, the label get 1/4 of the form estate and the component 3/4. Both components allow you to style the label and the wrappoer for the component individually through labelClass and wrapperClass properties.</p>
    </section>

    <section class="pb-2">
        <h3 class="text-xl">Horizontal</h3>

        <Code language="html">
            <pre>{horizontal}</pre>
        </Code>

        <Example>
            <Horizontal label="Horizontal text:" labelClass="text-pink-500">
                <Input type="text" placeholder="Some text..." />
            </Horizontal>
            <Horizontal label="Horizontal select:">
                <Select items={items} let:item>
                    <option value={item.value}>{item.label}</option>
                </Select>
            </Horizontal>
            <Horizontal label="Horizontal textarea:">
                <Textarea placeholder="I have room for a big chunk of text!11"></Textarea>
            </Horizontal>
        </Example>
    </section>

    <section>
        <h3 class="text-xl">Vertical</h3>

        <Code language="html">
            <pre>{vertical}</pre>
        </Code>

        <Example>
            <Vertical label="Vertical text:">
                <Input type="text" placeholder="Some text..." />
            </Vertical>
            <Vertical label="Vertical select:">
                <Select items={items} let:item>
                    <option value={item.value}>{item.label}</option>
                </Select>
            </Vertical>
            <Vertical label="Vertical textarea:">
                <Textarea placeholder="I have room for a big chunk of text!11"></Textarea>
            </Vertical>
        </Example>
    </section>
</Layout>