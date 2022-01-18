import React, { Component } from 'react'
import EditForm from "./EditForm"
import "./Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state={
            flag:1
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleFlag = this.handleFlag.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleClick(){
        console.log("Clicked");
        this.props.removeTodo(this.props.id);
    }
    handleEdit(){
        console.log("Editing");
        this.setState({flag:0});
    }
    handleFlag(){
        console.log("Gotcha Got Here");
        // this.setState(st=>({
        //     flag:!st.flag
        // }))
        // this.setState({flag:!this.state.flag});
        this.setState({flag:1});
    }
    handleToggle(){
        this.props.toggleTodo(this.props.id);
    }
    render() {
        return (
            <div className="Todo">

                {this.state.flag===1?  <li className={this.props.completed ? "Todo-task completed " : "Todo-task"} onClick={this.handleToggle}>{this.props.text}</li> :<EditForm name={this.props.text} id={this.props.id} updateTodo={this.props.updateTodo} handleFlag={this.handleFlag}/>}
              <div class="Todo-buttons">
                  <button onClick={this.handleClick}>X</button>
                  <button onClick={this.handleEdit}>Edit</button>
              </div>
              {/* <button onClick={this.handleFlag}>Edit</button>  */}
            </div>
        )
    }
}

export default  Todo
