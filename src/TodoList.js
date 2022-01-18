import React, { Component } from 'react'
import Todo from "./Todo"
import TodoForm from "./TodoForm"
import "./TodoList.css"


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            // work:[{todo:"",id:""}]
            work:[]
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    updateTodo(todo){
       
        const updatedTodos = this.state.work.map(m => {
            if (m.id === todo.id) {
              return { ...m, todo: todo.todo };
            }
            return m;
          });
          this.setState({ work: updatedTodos });
       
    }
    toggleTodo(id){
       
        const updatedTodos = this.state.work.map(m => {
            if (m.id === id) {
              return { ...m, completed:!m.completed };
            }
            return m;
          });
          this.setState({ work: updatedTodos });
       
    }

   

    removeTodo(id) {
        this.setState({work:this.state.work.filter(todo=> todo.id!==id)})
    }

    addTodo(todo){
        console.log(todo);
        this.setState({work:[...this.state.work,todo]})
    }

    render() {
        const renderTodo = this.state.work.map(m=>(<Todo text={m.todo} key={m.id} id={m.id} removeTodo={this.removeTodo} updateTodo={this.updateTodo} completed={m.completed} toggleTodo={this.toggleTodo} className="todo"/>))
        return (
            <div className='TodoList'>
                <h1> Todo List!!<span>A Simple React App Todo list App</span></h1>
                <ul className='todo-list'>
                {renderTodo}
                </ul>
                <TodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default TodoList;
