import { defineStore } from 'pinia'

interface Todo {
  text: string
}

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [] as Todo[]
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo)
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1)
    },
    editTodo(index: number, newText: string) {
      this.todos[index].text = newText
    }
  }
})
