<script context="module">
  export async function preload(page, session) {
    return page.params
  }
</script>

<script>
  import Todo from '../../components/Todo.svelte'
  import { todos } from '../../api'

  export let id

  $: todo = $todos.find(todo => todo._id === id)
</script>

{#if todo}
  <Todo {todo} />
{/if}
