import React from 'react'

export const TodoInput = ({onchange,onclick}) => {
  return (
    <>
     <div>
        <input type='text' placeholder='Typing....' onChange={onchange}/>
        <button onClick={onclick}>Add</button>
     </div>
    </>
  )
}
