import React, { Component } from 'react'
import './App.css';
import ListItem from './components/ListItem';
import {FaTrash} from 'react-icons/fa';
import FlipMove from 'react-flip-move';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
       item:[],
       currentItem:{
         text:"",
         key:""
       }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!=""){
      const newItems =[...this.state.item,newItem];
      this.setState({
        item:newItems,
        currentItem:{
          text: "",
          key: ""
        }
      })
    }
  }
  deleteItem(key){
    const filterItem = this.state.item.filter(item => item.key!==key);
    this.setState({
      item: filterItem
    })
  }
  setUpdate(text,key){
    const items = this.state.item;
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      item: items
    })
  }
  render(){
    return (
      <div id="app">
        <header>
        <input type="text" id="inputs" placeholder="Enter text" value={this.state.currentItem.text} onChange={this.handleInput} />
        <button type="submit" onClick={this.addItem}>Add</button>
      </header>
      <ListItem items = {this.state.item} deleteItem ={this.deleteItem}
      setUpdate = {this.setUpdate}></ListItem>
      </div>
    );
  }
}

export default App;