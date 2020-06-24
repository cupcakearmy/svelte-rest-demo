import { writable } from 'svelte/store'

export const todos = writable([])

// And so on...
export const someOtherStore = writable('something')
