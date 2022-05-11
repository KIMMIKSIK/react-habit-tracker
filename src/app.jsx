import logo from './logo.svg';
import './app.css';
import Habits from './habits';
import Habit from './habit';
import React, {Component} from 'react';
import Navbar from './navbar';
import HabitAddForm from './habitAddForm';


class App extends Component { 
  
  state = {
    habits : [
    {name:"Reading", count:0, id:1},
    {name:"Learning", count:0,id:2},
    {name:"Coding", count:0,id:3}
]
}
handleIncrease = (habit) =>{ 
  const habits = this.state.habits.map(item=>{
    if(item.id === habit.id){
      return {...habit, count: habit.count + 1};
    }
    return item;

  })
  this.setState({habits})
}
handleDecrease = (habit) =>{
  const habits = this.state.habits.map(item=>{
    if(item.id ===habit.id){
      const count = habit.count - 1
      return {...habit, count:count<0?0:count}
    }
    return item;
  })
  this.setState({habits})
}
handleDelete = (habit) =>{  
  const habits = this.state.habits.filter(item=> item.id !== habit.id)
  this.setState({habits})
}

reset = () =>{
  const habits = this.state.habits.map(item=>{
    if(item.count !==0){
      return {...item, count:0}
    }
    return item;
  })
  this.setState({habits})
}


handleAdd = (name) =>{
  const habits = [...this.state.habits, {name, count:0,id:Date.now()}]
  this.setState({habits})
}


  render(){
    console.log("app")

    return (
      <>  
      <Navbar totalCount={this.state.habits.filter(item=>item.count>0).length}/>
      <Habits habits={this.state.habits} onIncrease={this.handleIncrease}
                onDecrease={this.handleDecrease} onDelete={this.handleDelete}
                onAdd={this.handleAdd} onReset={this.reset}/>    
         
    </>
  );

  }
  
}

export default App;




