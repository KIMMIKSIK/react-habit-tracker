import React, { useRef, memo } from 'react';


const HabitAddForm = memo((props) => {
    console.log('add');
    const inputRef = useRef();
    const formRef = useRef();

    const onSubmit = (e)=>{
        
        e.preventDefault();  
        //브라우저에서 제공해주는 기본 기능을 사용하지 않게 하는 명령어
         //submit작동 시 화면전체가 다시 렌더링되는 현상을 방지하기 위해 사용
         const name = inputRef.current.value
         name && props.onAdd(name);
         inputRef.current.value = "";
        // formRef를 만들어서 formRef.current.reset()도 가능
       
    }
     return (
                 <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                    <input placeholder = "Habit" type="text" id="input" ref={inputRef}/> 
                    <button className="button">Add</button>
                 </form>
        )
}
)
export default HabitAddForm;


//class에 pureComponent가 있다면 함수형 컴포넌트에는 memo가 있다.
//둘 다 컴포넌트 자신의 props나 state가 변경되지 않으면 리렌더링 하지 않는다!

