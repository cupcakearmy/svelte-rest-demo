<script>
  export let text = ''
</script>

<style>
  button {
    outline: none;
    border: none;
    color: hsl(0, 0%, 100%);
    background-color: hsl(0, 0%, 0%);
    padding: 0.5em 1em;
    border-radius: 1em;
    font-size: inherit;
    cursor: pointer;
  }
</style>

<button on:click {...$$restProps}>{text}</button>
