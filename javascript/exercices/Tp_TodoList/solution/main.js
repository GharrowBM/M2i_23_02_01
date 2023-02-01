let todoCount = 0
let todos = []
let searchedTodos = []
let searchText = ""

class TodoItem {
  constructor(title, content) {
    this.id = ++todoCount
    this.title = title
    this.content = content
    this.isDone = false
  }
}

const addTodoForm = document.querySelector("#addTodoForm")
const todoTitleInput = document.querySelector("#title")
const todoContentInput = document.querySelector("#content")
const todoSearchForm = document.querySelector("#searchTodosForm")
const searchTodoInput = document.querySelector("#searchInput")
const todoTableBody = document.querySelector("#todoTableBody")

const renderTodos = () => {
  todoTableBody.innerHTML = ""

  searchedTodos = todos.filter(todo => todo.title.includes(searchText))

  for (const todo of searchedTodos) {
    todoTableBody.innerHTML += `
    <tr>
    <td>${todo.id}</td>
    <td>${todo.title}</td>
    <td>${todo.content}</td>
    <td class="d-flex justify-content-center">
      <button class="btn btn-danger" onclick="deleteTodo(${todo.id})"><i class="bi bi-trash"></i></button>
      ${todo.isDone ? 
      (`<button class="btn btn-success ms-3" onclick="switchStatus(${todo.id})"><i class="bi bi-check-circle"></i></button>`)
      :
      (`<button class="btn btn-warning ms-3" onclick="switchStatus(${todo.id})"><i class="bi bi-clock"></i></button>`)}
    </td>
    </tr>
    `
  }
}

const addTodoToList = (title, content) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (todos.find(todo => todo.title === title && todo.content === content)) {
        reject(new Error("Il y a déjà cette tâche dans la liste de tâches !"))
      } else {
        todos.push(new TodoItem(title, content))
        resolve()
      }
    }, 1000)
  })
}

const removeTodoFromList = (id) => {
  return new Promise(() => {
    setTimeout(() => {
      const foundTodo = todos.find(todo => todo.id === id)
      if (foundTodo) {
        todos.splice(todos.indexOf(foundTodo), 1)
        resolve()
      } else {
        reject(new Error("Cette todo n'existe pas !"))
      }
    }, 1000)
  })
}

const switchTodoStatus = (id) => {
  return new Promise(() => {
    setTimeout(() => {
      const foundTodo = todos.find(todo => todo.id === id)
      if (foundTodo) {
        foundTodo.isDone = !foundTodo.isDone
        resolve()
      } else {
        reject(new Error("Cette todo n'existe pas !"))
      }
    }, 1000)
  })
}

addTodoForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  try {
    await addTodoToList(todoTitleInput.value, todoContentInput.value)
    renderTodos()
  } catch (error) {
    console.error(error);
  }
})

todoSearchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  searchText = searchTodoInput.value
  renderTodos()
})

searchTodoInput.addEventListener('input', (e) => {
  searchText = e.target.value
  renderTodos()
})

const deleteTodo = async (todoId) => {
  await removeTodoFromList(todoId)
  renderTodos()
}

const switchStatus = async (todoId) => {
  await switchTodoStatus(todoId)
  renderTodos()
}