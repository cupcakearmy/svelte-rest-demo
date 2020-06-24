<script>
  export let value
  export let full = false
</script>

<style>
  input {
    outline: none;
    border: 3px solid hsl(0, 0%, 0%);
    border-radius: 1em;
    font-size: inherit;
    padding: 0.25em 1em;
  }

  .full {
    width: 100%;
  }
</style>

<input bind:value class:full {...$$restProps} />
