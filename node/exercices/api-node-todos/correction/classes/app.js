import { Todo } from "./todo.js"


export class App {
    constructor() {
        this.todos = []
        this.count = 0

    }


    //Méthode création todo
    createTodo(title,content){
        const todo = new Todo(++this.count,title,content)
        this.todos.push(todo)
    }

    // Méthode recup todo par id
    findTodoById(id){
        return this.todos.find(t => t.id == id)
    }

    // Méthode pour rechercher par titre
    searchTodoByTitle(search) {
        return this.todos.filter(t => t.title.includes(search))
    }

    //Méthode supprimer todo
    deleteTodo(id) {
        const todo = this.findTodoById(id)
        if(todo != undefined){
            this.todos = this.todos.filter(t => t.id != id)
            return true
        }
        return false
    }

    //Méthode modif todo
    updateTodo(id,title,content){
        const todo = this.findTodoById(id)
        if(todo != undefined){
           todo.title = title
           todo.content = content
            return true
        }
        return false
    }

    //Méthode changement status todo
    updateTodoStatus(id){
        const todo = this.findTodoById(id)
        if(todo != undefined){
            todo.status = !todo.status
            return true
        }
        return false
    }
}