<script>
    import {Route} from 'tinro'

    export let path
    export let fallback = false
</script>

<Route {path} {fallback} let:meta>
    <slot {meta}></slot>
</Route>