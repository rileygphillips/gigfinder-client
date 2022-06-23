import React from "react";
import { Link } from "react-router-dom";



export const MusicianDashboard = () => {




  return (
    <>
    <div className="titleHeader"><h1>Musician Dashboard</h1></div>
      <Link to="/editmusicianprofile"><button>Edit Profile</button></Link>
      <div><h2>Submitted Gigs</h2></div>
        
    
    </>
  )
};