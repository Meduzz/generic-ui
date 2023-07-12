<script>
    import {micromark} from 'micromark'
    import {gfm, gfmHtml} from 'micromark-extension-gfm'
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()
    const magicTexts = {
        '<br>': '\n',
        '&nbsp;': ' ',
        '&gt;': '>',
        '&lt;': '<'
    }

    export let markdown
    export let editing = false

    let text = htmlify(markdown)

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
        dispatch("updated", unhtmlify(text))
    }
</script>

<div {...$$restProps}>
    {#if editing}
    <p contenteditable="true" bind:innerHTML={text} on:keyup={updated}></p>
    {:else}
    {@html render(markdown)}
    {/if}
</div>