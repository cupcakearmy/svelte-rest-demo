<script>
  import Button from './Button.svelte'
  import Field from './Field.svelte'

  import { remove, update } from '../api/todo.js'

  export let todo

  function toggle() {
    update({
      ...todo,
      done: !todo.done,
    })
  }
</script>

<style>
  li {
    display: block;
  }

  li.done {
    --clr-accent: #c9c9c9;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-top: 0.5em;
    margin-bottom: 3em;
  }

  span {
    display: block;
    width: 0.5em;
  }
</style>

<li class:done={todo.done}>
  <Field bind:value={todo.title} full />
  <div>
    <Button on:click={toggle} text={todo.done ? 'Reopen' : 'Completed'} />
    {#if !todo.done}
      <span />
      <Button on:click={() => update(todo)} text="Update" />
      <span />
      <a href={'/todo/' + todo._id}>
        <Button text="View" />
      </a>
    {/if}
    <span />
    <Button on:click={() => remove(todo._id)} text="Delete" />
  </div>
</li>
