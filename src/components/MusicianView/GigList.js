// Create list of gigs for a musician//
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import { getAllGigs } from "../DataManager";

export const GigList = () => {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    getAllGigs().then((gigs) => {
      setGigs(gigs);
    });
  }, []);

  return (
    <>
    <div className="titleHeader"><h1>Gigs</h1></div>
      <div className="singleGigBox">
        {gigs.map((gig) => {
          return (
            <div key={`gig--${gig.id}`}>
              <div><h2>{gig.gig_name}</h2></div>
              <div><h2>{gig.artist.name}</h2></div>
              <img src={gig.photo_link} width={350} height={250} /> 
              <div>Description: {gig.description}</div>
              <div>Date: {gig.date}</div>
              <div>Location: {gig.location}</div>
              <div>Genre: {gig.genre.label}</div>
              <Link to={`/gig-details/${gig?.id}`}><button >details</button></Link>
            </div>
          );
        })}
      </div>
    </>
  )
};
