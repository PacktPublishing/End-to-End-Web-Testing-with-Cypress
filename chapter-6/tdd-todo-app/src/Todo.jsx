import React from 'react';
// /* Code credits: Wilstaley https://codepen.io/wilstaley/pen/KKwypJW */

// class Todo extends React.Component {
//   state = {
//     tasks: ['Todo 1', 'Todo 2', 'Todo 3']
//   };

//   handleSubmit = task => {
//     this.setState({tasks: [...this.state.tasks, task]});
//   }
  
//   handleDelete = (index) => {
//     const newArr = [...this.state.tasks];
//     newArr.splice(index, 1);
//     this.setState({tasks: newArr});
//   }

//   render() {
//     return(
//       <div className='wrapper'>
//         <div className='card frame'>
//           <Header numTodos={this.state.tasks.length} />
//           <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
//           <SubmitForm onFormSubmit={this.handleSubmit} />
//         </div>
//       </div>
//     );
//   } 
// }


// class SubmitForm extends React.Component {
//   state = { term: '' };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if(this.state.term === '') return;
//     this.props.onFormSubmit(this.state.term);
//     this.setState({ term: '' });
//   }

//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <input 
//           type='text'
//           className='input'
//           placeholder='Add Todo'
//           value={this.state.term}
//           onChange={(e) => this.setState({term: e.target.value})}
//         />
//         <button className='button'>Add todo item</button>
//       </form>
//     );
//   }
// }

// const Header = (props) => {
//   return(
//     <div className='card-header'>
//       <h1 className='card-header-title header'>
//        Number of Todos: {props.numTodos} 
//       </h1>
//     </div>
//   )
// }

// const TodoList = (props) => {
//   const todos = props.tasks.map((todo, index) => {
//     return <Todos content={todo} key={index} id={index} onDelete={props.onDelete} />
//   })
//   return( 
//     <div className='list-wrapper'>
//       {todos}
//     </div>
//   );
// }

// const Todos = (props) => {
//   return(
//     <div className='list-item'>
//       {props.content}
//       <button class="delete is-pulled-right" data-testid={props.id} onClick={() => {props.onDelete(props.id)}}></button>
//     </div>
//   );
// }


class Todo extends React.Component {
  state = {};
  render() {
    return (<div></div>);
  }
}
export default Todo;

