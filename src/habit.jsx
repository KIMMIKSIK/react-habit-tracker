import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  
  componentDidMount(){
console.log(`habit: ${this.props.habit.name} mounted`);
  }
    
  componentWillUnmount(){
    console.log(`habit: ${this.props.habit.name} will unmounted`);
  }
      handleIncrease = () =>{
        this.props.onIncrease(this.props.habit)
      }
      handleDecrease = () =>{
        this.props.onDecrease(this.props.habit)
      }
      handleDelete = () =>{
        this.props.onDelete(this.props.habit)
      }
      //PureComponent사용 시 Habit이 전부 다 렌더링되지 않게 되는데
      //App으로 부터 전달된 props들은 app인스턴스의 멤버변수이기 때문에
      //생성당시 이후 새로 생성되지 않는다. 즉 Habit입장에서는 props의 변화가
      //아무것도 없는것이다.(state는 가지고있지도않음) 

      //인수로 전달한 this.props.habit또한 habit객체는 그대로고
      //habit객체 안 count만 바뀐거라 얕은복사로는 감지할 수 없다.
      

    render() {   
      console.log("habit")
        const {name, count} = this.props.habit;
       
        return (
        <li>
         <span className="habit">{name}</span>
         <span  className="habit-count">{count}</span>
         <button className = "habit-button habit-increase" onClick={this.handleIncrease}>
         <i className="fa-solid fa-square-plus"></i>
         </button>
         <button className = "habit-button habit-decrease" onClick={this.handleDecrease}>
         <i className="fa-solid fa-square-minus"></i>
         </button>
         <button className = "habit-button habit-delete" onClick={this.handleDelete}>
         <i className="fa-solid fa-trash-can"></i>
         </button> 
        </li>
        )
       
         

}
}
export default Habit;