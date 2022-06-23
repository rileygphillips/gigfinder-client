import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import {getSingleGig} from "../DataManager";

export const GigDetails = () => {
  const [gig, setGig] = useState([]);
  const { gigId } = useParams()

  useEffect(
      () => {
        getSingleGig(gigId)
        .then((gig) => {
            setGig(gig);
        }
        )
        }
    , [gigId]    
    );
    

  return (
    <>
    <div className="titleHeader"><h1>{gig.gig_name}</h1></div>
      <div className="">
            <div>
              <img src={gig.photo_link} width={250} height={250} /> 
                <div>Location: {gig.location}</div>
                <div>Venue: {gig.venue}</div>
                <div>Date: {gig.date}</div>
                {/* <div>Genre: {gig.genre.label}</div> */}
                <div>Description: {gig.description}</div>
                {/* <div>Instrument Needed: {gig.instruments_needed.label}</div> */}


                
            </div>
          
      </div>
    </>
  )
};