<script>
    export let border = true
    export let shadow = false
    export let padding = true
</script>

<div class="border-solid border-slate-400{border ? ' border':''}{shadow ? ' shadow-lg':''}{padding ? ' p-2':''}" {...$$restProps}>
    <slot></slot>
</div>