import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'

class App extends Component {
  state = { 
    todos: [
        {
            id: 1,
            title: 'take the trash',
            completed: false
        },
        {
            id: 2,
            title: 'Wash dishes',
            completed: true
        },
        {
            id: 3,
            title: 'Feeding the dog',
            completed: false
        }
    ]
 }

 markCompleted = (id) => {
   console.log(id);
   this.setState({
     todos: this.state.todos.map(todo => {
       if(todo.id === id){
        todo.completed = !todo.completed
       }

       return todo;
     })
   })

  } // end off markcomplete
     delTodo = (id) => {
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
     }

  render() { 
    return ( 
      <React.Fragment>
        <Header />
        <Todos todos = {this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo}/>
      </React.Fragment>

     );
  }
}
 
export default App;