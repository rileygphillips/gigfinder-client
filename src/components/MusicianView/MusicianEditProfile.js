import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../auth/Auth.css";
import { getAllInstruments, getAllSkillLevels} from "../auth/AuthManager";

// TODO: This should get you started on registering a new user.
// Add new fields depending on your server side registration
export const EditMusicianProfile = () => {
  const username = useRef();
  const password = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const bio = useRef();
  const location = useRef();
  const resume_link = useRef();
  const skill_level = useRef();
  const photo_link = useRef();
  const instrument = useRef();
  const audition_video_link = useRef();
  const history = useHistory();
  const [instruments, setInstruments] = useState([]);
  const [skillLevels, setSkillLevels] = useState([]);

  useEffect(() => {
    getAllInstruments().then((instruments) => {
      setInstruments(instruments);
    });
  }, []);

  useEffect(() => {
    getAllSkillLevels().then((skill_levels) => {
      setSkillLevels(skill_levels);
    });
  }, []);


    // const newUser = {
    //   is_artist: false,
    //   username: username.current.value,
    //   password: password.current.value,
    //   first_name: first_name.current.value,
    //   last_name: last_name.current.value,
    //   email: email.current.value,
    //   bio: bio.current.value,
    //   location: location.current.value,
    //   resume_link: resume_link.current.value,
    //   photo_link: photo_link.current.value,
    //   audition_video_link: audition_video_link.current.value,
    //   instrument: instrument.current.value,
    //   skill_level: skill_level.current.value,
    // };


  return (
    <main>
      
      <div className="header">
        {/* <!--Content before waves--> */}
        <div className="inner-header flex">
          <form >
            <h3>EDIT PROFILE</h3>

            <fieldset>
              <label htmlFor="inputUsername">Username</label>
              <input
                ref={username}
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputEmail">Email </label>
              <input
                ref={email}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputPassword"> Password </label>
              <input
                ref={password}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputFirstName">First Name</label>
              <input
                ref={first_name}
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputLastName">Last Name</label>
              <input
                ref={last_name}
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputLocation">Location</label>
              <input
                ref={location}
                type="text"
                name="location"
                placeholder="Location"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputBio">Bio</label>
              <input
                ref={bio}
                type="text"
                name="bio"
                placeholder="Bio"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputInstrument">Instrument</label>
              <select
                name="selectInstrument"
                id="instrument"
                ref={instrument}
                value={instrument.instrument}
              >
                <option value="0">Choose an Instrument</option>
                {instruments.map((i) => {
                  return (
                    <option key={`instrument--${i.id}`} value={`${i.id}`}>
                      {`${i.label}`}
                    </option>
                  );
                })}
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="inputSkillLevel">Skill Level</label>
              <select
                name="selectSkillLevel"
                id="skill_level"
                ref={skill_level}
                value={skill_level.skill_level}
              >
                <option value="0">Choose an Skill Level</option>
                {skillLevels.map((sl) => {
                  return (
                    <option key={`skillLevel--${sl.id}`} value={`${sl.id}`}>
                      {`${sl.label}`}
                    </option>
                  );
                })}
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="inputResumeLink">Resume Link</label>
              <input
                ref={resume_link}
                type="text"
                name="ResumeLink"
                placeholder="Resume Link"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputAuditionVideoLink">
                Audition Video Link
              </label>
              <input
                ref={audition_video_link}
                type="text"
                name="AuditionVideoLink"
                placeholder="Audition Video Link"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputPhotoLink">Photo Link</label>
              <input
                ref={photo_link}
                type="text"
                name="photoLink"
                placeholder="Photo Link"
                required
              />
            </fieldset>

            <fieldset>
              <button type="submit">UPDATE</button>
              <div>
              <Link to="/musician-dashboard"><button >CANCEL</button></Link>
            </div>
            </fieldset>
            
            
          </form>
        </div>
        {/* <!--Waves Container--> */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,66,66,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        {/* <!--Waves end--> */}
      </div>
    </main>
  );
};
