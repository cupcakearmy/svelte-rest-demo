import axios from 'axios'

import { todos } from '../stores'

axios.defaults.baseURL = '//localhost:8000'

export async function refresh() {
  const { data } = await axios({
    url: '/todo',
  })
  todos.set(data)
}

export async function add(todo) {
  await axios({
    url: '/todo',
    method: 'post',
    data: todo,
  })
  await refresh()
}

export async function remove(id) {
  await axios({
    url: '/todo/' + id,
    method: 'delete',
  })
  await refresh()
}

export async function update({ _id, ...todo }) {
  await axios({
    url: '/todo/' + _id,
    method: 'post',
    data: todo,
  })
  await refresh()
}
