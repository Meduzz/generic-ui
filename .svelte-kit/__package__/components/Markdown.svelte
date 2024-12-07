<script>
    import {micromark} from 'micromark'
    import {gfm, gfmHtml} from 'micromark-extension-gfm'

    const magicTexts = {
        '<br>': '\n',
        '&nbsp;': ' ',
        '&gt;': '>',
        '&lt;': '<'
    }

    /*
     * TODO turn into headless component?
     */

    /**
     * @typedef {Object} Props
     * @property {string} markdown
     * @property {boolean} [editing]
     * @property {updateHook} [function]
     */

    /** @type {Props & { [key: string]: any }} */
    let { markdown, editing = false, updateHook, ...rest } = $props();

    let text = $state(htmlify(markdown))

    function render(md) {
        return micromark(md, {
            extensions: [gfm()],
            htmlExtensions: [gfmHtml()]
        })
    }

    function htmlify(md) {
        return md.replaceAll('\n', '<br />')
    }

    function unhtmlify(html) {
        Object.keys(magicTexts).forEach(k => {
            html = html.replaceAll(k, magicTexts[k])
        })

        return html
    }

    function updated() {
        if (updateHook) {
            updateHook(unhtmlify(text))
        }
    }
</script>

<div {...rest}>
    {#if editing}
    <p contenteditable="true" bind:innerHTML={text} onkeyup={updated}></p>
    {:else}
    {@html render(markdown)}
    {/if}
</div>