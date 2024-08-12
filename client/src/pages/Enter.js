import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Enter.css"

function Enter() {
    const navigate = useNavigate()
    return (
        <div className="homepage">
        <h1>Welcome to Our Platform</h1>
        <div className="button-container">
          <button className="home-button user-button" onClick={() => navigate('user')} >User</button>
          <button className="home-button admin-button" onClick={() => navigate('admin')}>Admin</button>
        </div>
      </div>
   
    )
}

export default Enter
