<script>
	import {ListY, Container, Columns, Column, Rows, Row, Routable, Panel} from './layout'
	import Start from './doc/Start.svx'
	import ColumnsDoc from './doc/Columns.svx'
	import RowsDoc from './doc/Rows.svx'
	import PanelDoc from './doc/Panel.svx'
	import RoutableDoc from './doc/Routable.svx'
	import Lists from './doc/Lists.svx'
	import Buttons from './doc/Buttons.svx'
	import HeaderDoc from './doc/Header.svx'
	import Tables from './doc/Table.svx'
	import TextDoc from './doc/Text.svx'
	import Markdown from './doc/Markdown.svx'
	import InputDoc from './doc/Input.svx'
	import Select from './doc/Select.svx'
	import Textarea from './doc/Textarea.svx'
	import RadioGroup from './doc/RadioGroup.svx'
	import CheckboxGroup from './doc/CheckboxGroup.svx'
	import SubHeader from './doc/SubHeader.svx'
</script>

<Container center={false}>
	<Columns>
		<Column class="flex-shrink-0">
			<Panel>
				<Rows>
					<Row>
						<span class="underline">Layout</span>
						<ListY>
							<div>
								<a href="/columns">Columns & Column</a>
							</div>
							<div>
								<a href="/rows">Rows & Row</a>
							</div>
							<div>
								<a href="/panels">Panel</a>
							</div>
							<div>
								<a href="/routable">Routable</a>
							</div>
							<div>
								<a href="/lists">ListX & ListY</a>
							</div>
						</ListY>
					</Row>
					<Row>
						<span class="underline">Components</span>
						<ListY>
							<div>
								<a href="/buttons">Button</a>
							</div>
							<div>
								<a href="/header">Header</a>
							</div>
							<div>
								<a href="/subheader">Sub header</a>
							</div>
							<div>
								<a href="/tables">Table</a>
							</div>
							<div>
								<a href="/text">Text</a>
							</div>
							<div>
								<a href="/markdown">Markdown</a>
							</div>
						</ListY>
					</Row>
					<Row>
						<span class="underline">Forms</span>
						<ListY>
							<div>
								<a href="/inputs">Input</a>
							</div>
							<div>
								<a href="/select">Select</a>
							</div>
							<div>
								<a href="/textarea">Textarea</a>
							</div>
							<div>
								<a href="/radiogroup">Radio group</a>
							</div>
							<div>
								<a href="/checkboxgroup">Checkbox group</a>
							</div>
						</ListY>
					</Row>
				</Rows>
			</Panel>
		</Column>
		<Column>
			<Panel>
				<Routable path="/">
					<Start />
				</Routable>
				<Routable path="/columns">
					<ColumnsDoc />
				</Routable>
				<Routable path="/rows">
					<RowsDoc />
				</Routable>
				<Routable path="/panels">
					<PanelDoc />
				</Routable>
				<Routable path="/routable/*">
					<RoutableDoc />
				</Routable>
				<Routable path="/lists">
					<Lists />
				</Routable>
				<Routable path="/buttons">
					<Buttons />
				</Routable>
				<Routable path="/header">
					<HeaderDoc />
				</Routable>
				<Routable path="/subheader">
					<SubHeader />
				</Routable>
				<Routable path="/tables">
					<Tables />
				</Routable>
				<Routable path="/text">
					<TextDoc />
				</Routable>
				<Routable path="/markdown">
					<Markdown />
				</Routable>
				<Routable path="/inputs">
					<InputDoc />
				</Routable>
				<Routable path="/select">
					<Select />
				</Routable>
				<Routable path="/textarea">
					<Textarea />
				</Routable>
				<Routable path="/radiogroup">
					<RadioGroup />
				</Routable>
				<Routable path="/checkboxgroup">
					<CheckboxGroup />
				</Routable>
			</Panel>
		</Column>
	</Columns>
</Container>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.primary {
		@apply bg-blue-500 text-white
	}

	.secondary {
		@apply bg-orange-500 text-white
	}

	.button {
		@apply py-1 px-3 rounded-lg
	}

	.input {
		@apply p-1 pl-2 border rounded-lg
	}
</style>