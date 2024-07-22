import React from 'react'
import '../Pages/Dashboard.css'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div >
      <nav className='dashboard'>
        <div className='navdiv'>
          <h1>Dashboard</h1>
        </div>
      </nav>
      <div className='sideout'>
        <div className='sidebar'>
          <Link to={"/"}><p>Profile</p></Link>
          <Link to={"Messages"}><p>Messages</p></Link>
          <Link to={"Blogs"}><p>Blogs</p></Link>
          <Link to={"Settings"}><p>Settings</p></Link>
        </div>
        <div ><Outlet /></div>
      </div>
    </div>
  )
}

export default Dashboard