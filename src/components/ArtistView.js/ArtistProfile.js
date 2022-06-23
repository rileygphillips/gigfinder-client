import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import {getGigsByUser, getSingleArtist} from "../DataManager";

export const ArtistProfile = () => {
  const [artist, setArtist] = useState([]);
  const [gigs, setGigs] = useState([]);
  const { artistId } = useParams()

  useEffect(
      () => {
        getSingleArtist(artistId)
        .then((artist) => {
            setArtist(artist);
        }
        )
        }
    , []    
    );

    useEffect(
      () => {
          {
              getGigsByUser(artistId)
              .then(setGigs)
          }
      },
      []
  )

  return (
    <>
    <div className="titleHeader"><h1>{artist.name}</h1></div>
      <div className="singleArtistBox">
            <div>
              <img src={artist.photo_link} width={150} height={150} /> 
                <div>Location: {artist.location}</div>
                <div>Genre: {artist.genre?.label}</div>
                <div>Bio: {artist.bio}</div>
                <div>Music: {artist.music_link}</div>
                <div>Website: {artist.website_link}</div>   
            </div>
            </div>
      
            <div><h3>Listed Gigs</h3></div>
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
              <div>Instruments Needed: {gig.instruments_needed.label}</div>
              <div>Skill Level Needed: {gig.skill_level_needed.label}</div>
              <Link to={`/gig-details/${gig?.id}`}><button >details</button></Link>
            </div>
          );
        })}
       </div>
    </>
  )
};