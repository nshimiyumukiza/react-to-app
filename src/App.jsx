import React from 'react'
import Add from './Pages/Add'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Todos from './Pages/Todos'
const App = () => {
  return (
    <div className='bg-sky-950'>
      <Home />
      <Todos />
<Add />
<Navbar />
<Footer />
    </div>
  )
}

export default App

