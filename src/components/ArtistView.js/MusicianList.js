// Create list of Musicians for Artists//
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import { getAllMusicians } from "../DataManager";

export const MusicianList = () => {
  const [musicians, setMusicians] = useState([]);

  useEffect(() => {
    getAllMusicians().then((musicians) => {
      setMusicians(musicians);
    });
  }, []);

  return (
    <>
    <div className="titleHeader"><h1>Musicians</h1></div>
      <div className="singleMusiciansBox">
        {musicians.map((musician) => {
          return (
            <div key={`musician--${musician.id}`}>
              <div><h2>{musician.first_name} {musician.last_name}</h2></div>
              <img src={musician.photo_link} width={150} height={150} /> 
                <div>{musician.location}</div>
                <div>Instrument: {musician.instruments?.label}</div>
                <div>Skill Level: {musician.skill_level?.label}</div>
                <Link className="userLink" to={`/musician-profile/${musician?.id}`}><button>User Profile</button></Link>
            </div>
          );
        })}
      </div>
    </>
  )
};