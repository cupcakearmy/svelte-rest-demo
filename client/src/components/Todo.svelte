<script>
  import Button from './Button.svelte'
  import Field from './Field.svelte'

  import { remove, update } from '../api'

  export let todo
</script>

<style>
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2.5em;
  }

  span {
    display: block;
    width: 1em;
  }
</style>

<li>
  <Field bind:value={todo.title} full />
  <span />
  <Button
    on:click={() => (window.location.pathname = '/todo/' + todo._id)}
    text="View" />
  <span />
  <Button on:click={() => update(todo)} text="Update" />
  <span />
  <Button on:click={() => remove(todo._id)} text="Delete" />
</li>
