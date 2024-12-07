<script>
    /**
     * @typedef {Object} Props
     * @property {string} text
     */

    /** @type {Props & { [key: string]: any }} */
    let { text, ...rest } = $props();
</script>

<div {...rest}>{text}</div>