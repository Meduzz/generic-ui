<script>
    import {Route} from 'tinro'

    export let url
</script>

<Route path={url} let:meta>
    <slot {meta}></slot>
</Route>