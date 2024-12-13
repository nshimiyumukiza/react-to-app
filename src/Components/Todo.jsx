import React from 'react'

const Todo = ({name,action}) => {
  return (
    <div>
      <div className='border rounded-md space-x-3 space-y-3'>
      <h1 className='text-green-400 text-center'>{name}</h1>
      <p>{action}</p>
      </div>
  
    </div> 
  )
}

export default Todo
