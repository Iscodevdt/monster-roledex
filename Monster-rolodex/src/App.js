

import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.componentes'

// import { Cart } from './components/card/card.component'

import './App.css';
 
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respose => respose.json())
      .then(users => this.setState({monster: users}))
  }
 
  render() {
    return (
      <div className="App">
        <input
          type='search'
          placeholder='Search monster'
          onChange={e => {
            this.setState({ searchField: e.target.value }, () => console.log(this.state));
            console.log(this.state)
          }}/>
        <CardList monster={this.state.monster} />
       
        
    </div>
    )
  }
}


