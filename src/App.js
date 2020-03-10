import React, { Component } from 'react';
import Todos from './components/Todos';

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
    
 }

  render() { 
    return ( 
      <React.Fragment>
        <Todos todos = {this.state.todos} markCompleted={this.markCompleted}/>
      </React.Fragment>

     );
  }
}
 
export default App;