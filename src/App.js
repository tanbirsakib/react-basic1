import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id :123 , name: 'Tanbir', age: 28 },
      {id : 456, name: 'Emon', age: 29 },
      {id : 789, name: 'Tohin', age: 26 }
    ],
    otherState: 'some other value',
    showPerson : false
  }

  

  nameChangedHandler = (event,id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      })
    const person = {...this.state.persons[personIndex]};  
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;  

    this.setState({persons : persons});
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPerson){
      persons =(<div>
        {this.state.persons.map((person,index) => {
          return <Person
          click = {()=>this.deletePersonHandler(index)} 
          name = {person.name} 
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.nameChangedHandler(event,person.id)}
          >
          </Person>
        })}
        
        </div> );
    }

    return (
      <div className="App">
        <h1>React Name Toggler App</h1>
        
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Name</button>
        {persons}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
