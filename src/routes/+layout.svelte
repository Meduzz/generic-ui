<script>
	import { ListY, Columns, Column, Panel } from '$lib/layout'
	import { Sidebar, Navbar } from '$lib/components'
    import '../app.css'

    let { children, ...rest } = $props()
    let groups = [
		{
			name: 'Layout',
			components: [
				{
					label: 'Columns & Column',
					href: '/columns',
				}, {
					label: 'Rows & Row',
					href: '/rows',
				}, {
					label: 'Panel',
					href: '/panels',
				}, {
					label: 'ListX & ListY',
					href: '/lists',
				}
			]
		},{
			name: 'Components',
			components: [
				{
					label: 'Button',
					href: '/buttons',
				}, {
					label: 'Header',
					href: '/header',
				}, {
					label: 'Sub header',
					href: '/subheader',
				}, {
					label: 'Table',
					href: '/tables',
				}, {
					label: 'Text',
					href: '/text',
				}, {
					label: 'Markdown',
					href: '/markdown',
				},{
					label: 'Sidebar',
					href: '/sidebar',
				},{
					label: 'Toasts',
					href: '/toasts',
				}
			]
		},{
			name: 'Forms',
			components: [
				{
					label: 'Input',
					href: '/inputs',
				},{
					label: 'Select',
					href: '/select',
				},{
					label: 'Textarea',
					href: '/textarea',
				},{
					label: 'Radio group',
					href: '/radiogroup',
				},{
					label: 'Checkbox group',
					href: '/checkboxgroup',
				},{
					label: 'Labels',
					href: '/labels',
				}
			]
		}
	]

	let menuItems = [
		{
			label: 'Home',
			href: '/'
		}, {
			label: 'Github',
			href: 'https://github.com/Meduzz/generic-ui'
		}
	]
</script>

{#snippet brand()}
	<a href="/">
		<h1 class="text-2xl">Generic UI</h1>
	</a>
{/snippet}
<Navbar {brand} items={menuItems} />
<Columns>
    <Column class="basis-1/5 flex-shrink-0">
        <Sidebar class="fixed top-25 w-full h-full overflow-scroll sm:block sm:static sm:w-auto">
            {#each groups as group}
                <div class="py-1">
                    <span class="underline">{group.name}</span>
                    <ListY items={group.components} >
                        {#snippet children(item)}
                            <div>
                                <a href="{item.href}">{item.label}</a>
                            </div>
                        {/snippet}
                    </ListY>
                </div>
            {/each}
        </Sidebar>
    </Column>
    <Column class="basis-4/5">
        <Panel>
            {@render children(rest)}
        </Panel>
    </Column>
</Columns>