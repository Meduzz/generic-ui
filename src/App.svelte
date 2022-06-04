<script>
	import {Panel, Columns, Column, Rows, Row} from '..'
	import {Header, Button, Input, Select, Textarea, Table} from '..'

	let value = "I was set"
	let items = [
		"I was set",
		"I was unset",
		"I was ..."
	]

	function buttonHandler() {
		console.log(value)
	}
</script>

<Columns>
	<Column>
		<Rows>
			<Row>
				<Panel>
					<Header title="Spam!" makePageTitle=true />
					<Input label="Text:" bind:bindValue={value} name="test" type="text" />
					<Select label="Text too:" bind:bindValue={value} name="select" {items} let:item>
						<option>{item}</option>
					</Select>
					<Textarea name="more" label="More text:" bind:bindValue={value} />
					<Button label="Click" action={buttonHandler} />
				</Panel>
			</Row>
			<Row>
				<Panel>
					<Header title="Spam!" makePageTitle=true />
					<Input label="Text:" bind:bindValue={value} name="test" type="text" />
					<Select label="Text too:" bind:bindValue={value} name="select" {items} let:item>
						<option>{item}</option>
					</Select>
					<Textarea name="more" label="More text:" bind:bindValue={value} />
					<Button label="Click" action={buttonHandler} />
				</Panel>
			</Row>
			<Row>
				<Panel>
					<Table rows={items}>
						<svelte:fragment slot="head">
							<tr class="bg-black text-white text-left">
								<th>Line</th>
								<th>Empty space</th>
							</tr>
						</svelte:fragment>
						<svelte:fragment slot="body" let:item>
							<tr class="odd:bg-slate-400">
								<td>{item}</td>
								<td>Void</td>
							</tr>
						</svelte:fragment>
						<svelte:fragment slot="footer">
							<tr>
								<th>3</th>
								<th>0</th>
							</tr>
						</svelte:fragment>
					</Table>
				</Panel>
			</Row>
		</Rows>
	</Column>
	<Column>
		<Rows>
			<Row>
				<Panel>
					<Header title="Spam!" makePageTitle=true />
					<Input label="Text:" bind:bindValue={value} name="test" type="text" />
					<Select label="Text too:" bind:bindValue={value} name="select" {items} let:item>
						<option>{item}</option>
					</Select>
					<Textarea name="more" label="More text:" bind:bindValue={value} />
					<Button label="Click" action={buttonHandler} />
				</Panel>
			</Row>
			<Row>
				<Panel>
					<Header title="Spam!" makePageTitle=true />
					<Input label="Text:" bind:bindValue={value} name="test" type="text" />
					<Select label="Text too:" bind:bindValue={value} name="select" {items} let:item>
						<option>{item}</option>
					</Select>
					<Textarea name="more" label="More text:" bind:bindValue={value} />
					<Button label="Click" action={buttonHandler} />
				</Panel>
			</Row>
			<Row>
				<Panel>
					<Header title="Spam!" makePageTitle=true />
					<Input label="Text:" bind:bindValue={value} name="test" type="text" />
					<Select label="Text too:" bind:bindValue={value} name="select" {items} let:item>
						<option>{item}</option>
					</Select>
					<Textarea name="more" label="More text:" bind:bindValue={value} />
					<Button label="Click" action={buttonHandler} />
				</Panel>
			</Row>
		</Rows>
	</Column>
</Columns>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>