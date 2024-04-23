<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useTodoStore } from '@/stores/todo';
import HeaderItem from './components/HeaderItem.vue';

export default defineComponent({
  name: 'TodoList',
  setup() {
    const store = useTodoStore();

    const newTodo = ref('');
    const todos = computed(() => store.todos);
    const editingIndex = ref<number | null>(null);
    const editedTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        store.addTodo({
          text: newTodo.value.trim(),
        });
        newTodo.value = '';
      }
    };

    const removeTodo = (index: number) => {
      store.removeTodo(index);
    };

    const startEditing = (index: number) => {
      editingIndex.value = index;
      editedTodo.value = todos.value[index].text;
    };

    const saveEditedTodo = () => {
      if (editedTodo.value.trim() !== '') {
        store.editTodo(editingIndex.value!, editedTodo.value.trim());
        editingIndex.value = null;
        editedTodo.value = '';
      }
    };

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
      startEditing,
      saveEditedTodo,
      editingIndex,
      editedTodo,
    };
  },
  components: {
    HeaderItem
  }
});
</script>

<template>
  <div class="container">
    <HeaderItem msg="Vue Todo List" />
    <form @submit.prevent>
      <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add new todo">
      <button @click="addTodo()">Submit</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span v-if="index !== editingIndex" @click="startEditing(index)">{{ todo.text }}</span>
        <input type="text" v-else v-model="editedTodo" @keyup.enter="saveEditedTodo" @blur="saveEditedTodo">
        <button v-if="index !== editingIndex" @click="removeTodo(index)">Delete</button>
        <button v-else @click="saveEditedTodo">Save</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
}

form {
  width: 100%;
  display: flex;
}

[type="text"],
button {
  display: inline-block;
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid var(--vt-c-text-dark-2);
  border-radius: 4px;
}

button {
  min-width: 82px;
  cursor: pointer;
  background: var(--primary);
  color: var(--vt-c-white-soft);
  border: 2px solid var(--primary);
  margin: 0 0.5rem;
  font-weight: 500;
}

button:hover {
  color: var(--vt-c-white-mute);
  border: 2px solid #194D33;
  background: #194D33;
}

[type="text"] {
  width: 100%;
}

[type="text"]:active,
[type="text"]:focus {
  outline: 0;
  border: 2px solid var(--secondary);
}

h1 {
  color: var(--text-color);
}

ul {
  padding: 0;
}

li {
  cursor: text;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  background: var(--vt-c-white-mute);
  border-radius: 4px;
  height: 4rem;
}

li span {
  display: inline-block;
  padding: 0.5rem;
  width: 250px;
  border-radius: 4px;
  border: 2px solid transparent;
}

li span:hover {
  background: var(--vt-c-divider-light-1)
}

li span:focus {
  outline: 0;
  border: 2px solid #194D33;
  background: var(--vt-c-divider-light-1)
}
</style>
