import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
      super(props);

      this.state = {
        text:" ",
        todos:[]
      };
    }

    newTodo(text){
      const newArray = this.todos.text.filter(() => {return true;});
      newArray.push({text:text})
      return {todos:newArray};
    }

    click(event) { 
      console.log('clicked');
      this.setState(this.newTodo(this.state.text))
    }
  render() {
    return (
      <div className="myTodo">
        <input type= 'text' placeholder='Enter Todo' />
          <button onClick= {this.click.bind(this)}>
          Enter 
          </button>
      </div>
    );
  }
}

export default App;
