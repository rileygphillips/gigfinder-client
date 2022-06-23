// Create list of Artists for a musician//
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import { getAllArtists } from "../DataManager";

export const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getAllArtists().then((artists) => {
      setArtists(artists);
    });
  }, []);

  return (
    <>
    <div className="titleHeader"><h1>Artists</h1></div>
      <div className="singleArtistBox">
        {artists.map((artist) => {
          return (
            <div key={`artist--${artist.id}`}>
              <div><h2>{artist.name}</h2></div>
              <img src={artist.photo_link} width={150} height={150} /> 
                <div>Location: {artist.location}</div>
                <div>Genre: {artist.genre.label}</div>

                <Link className="userLink" to={`/artist-profile/${artist?.id}`}><button>User Profile</button></Link>
            </div>
          );
        })}
      </div>
    </>
  )
};