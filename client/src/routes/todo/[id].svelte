<script context="module">
  export async function preload(page, session) {
    return page.params
  }
</script>

<script>
  import Todo from '../../components/Todo.svelte'
  import Button from '../../components/Button.svelte'

  import { todos } from '../../stores.js'

  export let id

  $: todo = $todos.find(todo => todo._id === id)
</script>

<a href="/">
  <Button text="← Back" />
</a>
<br />
<br />

{#if todo}
  <Todo {todo} />
{/if}
