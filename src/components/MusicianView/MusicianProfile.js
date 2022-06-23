import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import {getSingleMusician} from "../DataManager";

export const MusicianProfile = () => {
  const [musician, setMusician] = useState([]);
  const { musicianId } = useParams()

  useEffect(
      () => {
        getSingleMusician(musicianId)
        .then((musician) => {
            setMusician(musician);
        }
        )
        }
    , [musicianId]    
    );
    

  return (
    <>
    <div className="titleHeader"><h1>{musician.first_name} {musician.last_name}</h1></div>
      <div className="">
            <div>
              <img src={musician.photo_link} width={150} height={150} /> 
                <div>Location: {musician.location}</div>
                <div>Bio: {musician.bio}</div>
                <div>Skill Level: {musician.skill_level?.label}</div>
                <div>Contact Info: {musician.email}</div>
                <div>Resume Link: {musician.resume_link}</div>
                <div>Audition Video: {musician.audition_video_link}</div>

                
            </div>
          
      </div>
    </>
  )
};