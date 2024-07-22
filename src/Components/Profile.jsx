import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div className='profile'>
      <h1>Profile</h1>
      <div>
        <p >name:John Doe</p>
        <p>Email:John.doe@gmail.com</p>

      </div>

      <div>
        <h2>Bio</h2>
        <p>A Sofware Developer with a passion of learning new technologies and improving coding skills</p>
        <button >Edit Profile</button>
      </div>
    </div>
  )
}

export default Profile
