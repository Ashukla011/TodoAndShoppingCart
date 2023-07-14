import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
export const Todo = () => {
    const[Todo,setTodo]=useState([])
    const[text,setText]=useState("")
    function addTodo(){
        if(text.trim()!==''){
            const newTodo = {
                id: Date.now(),
                text: text,
                completed: false,
              };
         setTodo(()=>[...Todo,newTodo])
       setText("")
      
     }
    }
     const toggleTodo = (id) => {
        setTodo((prevState) =>
          prevState.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    function HandleInputValue(e){
       setText(e.target.value)
      
    }
    
    const totalCompletedTasks = Todo.reduce(
        (count, todo) => (todo.completed ? count + 1 : count),
        0
      );
    function Deleted(id){
        let deleted=Todo.filter((_,el)=>{
            return el!==id
        })
        setTodo(deleted)
    }

   
  return (
    <>
      <div style={{border:'1px solid black',width:"50%",margin:'auto',textAlign:'center'}}>
      <div style={{width:"50%",margin:'auto'}}>
       <input type="text" placeholder='Typeing....' onChange={HandleInputValue} value={text} />
       <button onClick={addTodo}>Add</button>
       </div>

       <div style={{width:'50%'}}>
       {/* <div> */}
        {Todo.map((todo,i)=>(
           <div key={i} style={{display:'flex',justifyContent:'space-between',margin:'10px ',padding:"10px"}}>
             <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
            <span
             style={{textDecoration:todo.completed ?"line-through":"none", }}
            >
             {todo.text} 
           
             </span> 

             <FaTrashAlt 
             style={{_hover:{color:"green"}}} onClick={()=>Deleted(i)}/>
             </div>
        ))}
       </div>
       <div style={{display:'flex',justifyContent:"space-between"}}>
        <h4>{`TOTAL TASK: ${Todo.length}`}</h4>
        <h4>{`TOTAL COMPLETED TASK: ${totalCompletedTasks}`}</h4>
       </div>
      </div>
    </>
  )
}
