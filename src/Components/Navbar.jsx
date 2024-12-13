import React from 'react'
const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between p-8'>
        <p className='text-3xl font-serif text-green-500'>work</p>
      <div className='space-x-3'>
        <a className='hover:text-blue-500' href="">home</a>
        <a className='hover:text-blue-500' href="">todos</a>
        <a className='hover:text-blue-500' href="">add</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar
