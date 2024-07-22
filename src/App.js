import React from 'react'
import Dashboard from './Pages/Dashboard'
import Profile from './Components/Profile'
import Messages from './Components/Messages'
import Blogs from './Components/Blogs'
import Settings from './Components/Settings'
import { Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Dashboard/>}>
      <Route index element={<Profile/>}/>
      <Route path='Messages' element={<Messages/>}/>
      <Route path='Blogs' element={<Blogs/>}/>
      <Route path='Settings' element={<Settings/>}/>
      
</Route>
<Route path='Settings' element={<Messages/>}/> 
    
  
      </Routes>
    </div>
  )
}

export default App
