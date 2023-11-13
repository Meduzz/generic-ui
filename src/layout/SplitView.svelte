<script context="module">
    import {writable} from 'svelte/store'

    export function select(item) {
        selected.set(item)
    }

    const selected = writable({})
    selected.set(null)
</script>

<script>
    import ListView from './ListView.svelte'
    import Row from './Row.svelte'
    import Rows from './Rows.svelte'
    import Panel from './Panel.svelte'

    export let loader
</script>

<Rows>
    <Row>
        <Panel>
            <ListView {loader} let:item>
                <slot name="listview" {item}></slot>
                <slot name="loading" slot="loading"></slot>
                <slot name="actions" slot="actions"></slot>
            </ListView>
        </Panel>
    </Row>
    <Row>
        <Panel>
            <slot name="detailview" detail={$selected}></slot>
        </Panel>
    </Row>
</Rows>
