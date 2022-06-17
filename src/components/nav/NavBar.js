import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <div className="navItems">
      <Link to="/musician-dashboard">DASHBOARD</Link>
      <Link to="/artist-list">ARTISTS</Link>
      <Link to="/gig-list">GIGS</Link>
      
      

      {
        localStorage.getItem("auth_token") !== null ?
          <button onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/" })
          }}>
            Logout
          </button> 
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
      }
      </div>
    </nav>
  )
}
