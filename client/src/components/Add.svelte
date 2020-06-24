<script>
  import Button from './Button.svelte'
  import Field from './Field.svelte'

  import { add } from '../api/todo.js'

  let title = ''

  async function submit(e) {
    // Here generally you would do a first validation before sending it to your service
    await add({ title, done: false })
    title = ''
  }
</script>

<!-- <style>
  input {
    outline: none;
    border: 3px solid hsl(0, 0%, 0%);
    border-radius: 1em;
    font-size: inherit;
    padding: 0.25em 1em;
  }
</style> -->

<h2>Add</h2>

<form on:submit|preventDefault={submit}>
  <Field bind:value={title} type="text" placeholder="Buy milk" />
  <Button type="submit" text="Save" />
</form>
