<script>
	import {ListY, Container, Columns, Column, Rows, Row, Routable, Panel} from './layout'
	import Start from './doc/Start.svelte'
	import ColumnsDoc from './doc/Columns.svelte'
	import RowsDoc from './doc/Rows.svelte'
	import PanelDoc from './doc/Panel.svelte'
	import RoutableDoc from './doc/Routable.svelte'
	import Lists from './doc/Lists.svelte'
	import Buttons from './doc/Buttons.svelte'
	import HeaderDoc from './doc/Header.svelte'
	import Tables from './doc/Table.svelte'
	import TextDoc from './doc/Text.svelte'
	import Markdown from './doc/Markdown.svelte'
	import SubHeader from './doc/SubHeader.svelte'
	import InputDoc from './doc/Input.svelte'
	import Select from './doc/Select.svelte'
	import Textarea from './doc/Textarea.svelte'
	import RadioGroup from './doc/RadioGroup.svelte'
	import CheckboxGroup from './doc/CheckboxGroup.svelte'
	import Sidebar from './doc/Sidebar.svelte'
	import Toasts from './doc/Toasts.svelte'

	let groups = [
		{
			name: 'Layout',
			components: [
				{
					label: 'Columns & Column',
					href: '/columns',
					component: ColumnsDoc
				}, {
					label: 'Rows & Row',
					href: '/rows',
					component: RowsDoc
				}, {
					label: 'Panel',
					href: '/panels',
					component: PanelDoc
				}, {
					label: 'Routable',
					href: '/routable/*',
					component: RoutableDoc
				}, {
					label: 'ListX & ListY',
					href: '/lists',
					component: Lists
				}
			]
		},{
			name: 'Components',
			components: [
				{
					label: 'Button',
					href: '/buttons',
					component: Buttons
				}, {
					label: 'Header',
					href: '/header',
					component: HeaderDoc
				}, {
					label: 'Sub header',
					href: '/subheader',
					component: SubHeader
				}, {
					label: 'Table',
					href: '/tables',
					component: Tables
				}, {
					label: 'Text',
					href: '/text',
					component: TextDoc
				}, {
					label: 'Markdown',
					href: '/markdown',
					component: Markdown
				},{
					label: 'Sidebar',
					href: '/sidebar',
					component: Sidebar
				},{
					label: 'Toasts',
					href: '/toasts',
					component: Toasts
				}
			]
		},{
			name: 'Forms',
			components: [
				{
					label: 'Input',
					href: '/inputs',
					component: InputDoc
				},{
					label: 'Select',
					href: '/select',
					component: Select
				},{
					label: 'Textarea',
					href: '/textarea',
					component: Textarea
				},{
					label: 'Radio group',
					href: '/radiogroup',
					component: RadioGroup
				},{
					label: 'Checkbox group',
					href: '/checkboxgroup',
					component: CheckboxGroup
				}
			]
		}
	]
</script>

<Container center={false}>
	<Columns>
		<Column class="basis-1/4">
			<Panel>
				<Rows>
					{#each groups as group}
						<Row>
							<span class="underline">{group.name}</span>
							<ListY items={group.components} let:item>
								<div>
									<a href="{item.href}">{item.label}</a>
								</div>
							</ListY>
						</Row>
					{/each}
				</Rows>
			</Panel>
		</Column>
		<Column class="basis-3/4">
			<Panel>
				<Routable>
					<Start />
				</Routable>
				{#each groups as group}
					{#each group.components as c}
						<Routable path={c.href}>
							<svelte:component this={c.component}></svelte:component>
						</Routable>
					{/each}
				{/each}
			</Panel>
		</Column>
	</Columns>
</Container>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>