import React, {Component } from 'react';
import Habit from './habit'
import HabitAddForm from './habitAddForm';
class Habits extends Component {

     
    handleIncrease = (habits) =>{
        this.props.onIncrease(habits)
      }
      handleDecrease = (habits) =>{
        this.props.onDecrease(habits)
      }
      handleDelete = (habits) =>{
        this.props.onDelete(habits)
      }

      handleAdd = (name)=>{
            this.props.onAdd(name)
      }
      reset = () =>{
            this.props.onReset()
      }

    render() {
      console.log("habits")
        return (
            <>
            <HabitAddForm onAdd={this.handleAdd}/>
            <ul className="ulList">
                {this.props.habits.map(item =>
                <Habit habit={item} key={item.id} onIncrease={this.handleIncrease}
                onDecrease={this.handleDecrease} onDelete={this.handleDelete}/>
                ) 
                }   
            </ul>
            <button className="button" onClick={this.reset}>Reset All</button>
            </>
            ); 
    }
}

export default Habits;

