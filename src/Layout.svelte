<script>
    export let title
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <h1 class="text-xl font-bold underline">{title}</h1>
    <div class="markdown">
        <slot></slot>
    </div>
</main>

<style global>
	.markdown ul {
		padding-inline-start: 1em;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	.markdown li {
    	list-style: disc;
	}

	.markdown p {
		@apply py-1;
	}

	.markdown pre {
		@apply bg-slate-300 py-2;
	}

	.markdown p code {
		@apply bg-slate-300 text-red-500/75;
	}

	.markdown .example {
		@apply my-4 py-2 border-2 border-dashed;
	}
</style>