import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='p-8 items-center '>
     <h1 className='text-4xl text-center text-blue-500 font-bold'>Wellcome To My Todo App</h1>
     <div className='flex justify-center items-center'>
     <ul className='grid grid-cols-2 p-12 space-x-8'>
        <li>Running</li>
        <li>Cooking</li>
        <li>Travalling</li>
        <li>Swimming</li>
        <li>Play</li>
     </ul>
      </div> 
     </div>
    </div>
  )
}

export default Home
