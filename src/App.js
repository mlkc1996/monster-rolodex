import React, {Component} from 'react';
import './App.css';
import {CardList} from "./card-list/card-list.components";
import {SearchBox} from "./search-box/search-box.component";

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:""
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=> this.setState({monsters:users}));
  }
  handlerChange = e=>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const {monsters, searchField}=this.state;
    const filtered = monsters.filter((monster)=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        handlerChange={this.handlerChange}
        placeholder="search monster"/>
        <CardList monsters={filtered}/>
      </div>
    )
  }
}

export default App;
