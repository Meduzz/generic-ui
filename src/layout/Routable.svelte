<script>
    import {Route} from 'tinro'

    export let path = ""
</script>

<Route {path} let:meta>
    <slot {meta}></slot>
</Route>