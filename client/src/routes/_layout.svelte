<script>
  // import 'bootstrap/dist/css/bootstrap.min.css'
  import { onMount } from 'svelte'

  import { refresh } from '../api/todo.js'

  onMount(() => {
    refresh()
  })
</script>

<style>
  :root {
    --clr-accent: #000;
  }

  :global(*) {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    position: relative;
    max-width: 45em;
    width: 100%;
    padding: 1em;
    margin: 0 auto;
  }
</style>

<main>
  <slot />
</main>
