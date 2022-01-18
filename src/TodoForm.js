import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./TodoForm.css"


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            todo:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({todo: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const newState = {...this.state,id:uuidv4(),completed:false}

        // console.log(this.state);
        this.props.addTodo(newState);
        this.setState({todo:""})
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="todo">New Todo  </label>
                    <input id="todo" type="text" name="todo" onChange={this.handleChange} value={this.state.todo} placeholder='New Todo'/>
                </div>
                <div>

                <button>Submit</button>
                </div>

            </form>
        )
    }
}

export default TodoForm
