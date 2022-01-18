import React, { Component } from 'react'
import "./Todo.css"


class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:this.props.name
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({todo:e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props);
        let key = this.props.id;
        const tobeUp = {...this.state,id:key}
        console.log(tobeUp);
        this.props.updateTodo(tobeUp);
        this.props.handleFlag();
    }
    render() {
        return (
            <div class="Todo">
                <form onSubmit={this.handleSubmit} className="form Todo-edit-form">
                    <input value={this.state.todo} onChange={this.handleChange} type="text" name="name"/>
                </form>
            </div>
        )
    }
}

export default EditForm
