<script>
  import Todo from './Todo.svelte'
  import { todos } from '../stores.js'
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
</style>

<h2>List</h2>

<ul>
  {#each $todos as todo (todo._id)}
    <Todo {todo} />
  {/each}
</ul>
