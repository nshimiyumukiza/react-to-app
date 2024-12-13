import React from 'react'

const Add = () => {
  return (
    <div className='flex justify-center pt-8'>
      <div className='pt-16 border bg-slate-400 w-[300px] h-[350px] space-y-4'>
        <form className='flex flex-col p-3'>
          <input className='border rounded-md p-4 outline-none font-bold text-sm' type="text"placeholder='enterName' /><br/>
          <textarea className='border rounded-md p-4 outline-none font-bold text-sm' name="" id=""placeholder='type your message'></textarea>

        </form>
      </div>
    </div>
  )
}

export default Add
