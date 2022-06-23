import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import { getUserGigs } from "../DataManager";



export const ArtistDashboard = () => {
    const [gigs, setGigs] = useState([]);

    useEffect(
      () => {
          {
              getUserGigs()
              .then(setGigs)
          }
      },
      []
  )



  return (
    <>
    <div className="titleHeader"><h1>Artist Dashboard</h1></div>

        <Link to="/creategig"><button>Create New Gig</button></Link>

        <div><h2>Scheduled Gigs</h2></div>
      <div className="singleGigBox">
        {gigs.map((gig) => {
          return (
            <div key={`gig--${gig.id}`}>
              <div><h3>{gig.gig_name}</h3></div>
              <img src={gig.photo_link} width={250} height={250} /> 
              <div>Location: {gig.location}</div>
              <div>Date: {gig.date}</div>
              <div>Description: {gig.description}</div>
              <div>Venue: {gig.venue}</div>
              {/* <div>Instruments Needed: {gig.instruments_needed.label}</div>
              <div>Skill Level Needed: {gig.skill_level_needed.label}</div> */}
              <Link to={`/edit-gig/${gig?.id}`}><div><button>Edit</button></div></Link>
              
            </div>
          );
        })}
      </div>
    

        
    
    </>
  )
};