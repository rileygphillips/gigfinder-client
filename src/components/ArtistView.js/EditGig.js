import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "../auth/Auth.css";
import { getAllInstruments, getAllSkillLevels } from "../auth/AuthManager";
import { getAllGenres, getSingleGig, updateGig } from "../DataManager";

export const EditGig = () => {
  const [instruments, setInstruments] = useState([]);
  const [skillLevels, setSkillLevels] = useState([]);
  const [genres, setGenres] = useState([]);
  const { gigId } = useParams();
  const history = useHistory();

  const [currentGig, setCurrentGig] = useState({
    gig_name: "",
    description: "",
    date: "",
    venue: "",
    location: "",
    instruments_needed: 0,
    skill_level_needed: 0,
    photo_link: "",
    genre: 0,
  });

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

  useEffect(() => {
    getAllGenres().then((genres) => {
      setGenres(genres);
    });
  }, []);

  useEffect(() => {
    getSingleGig(gigId).then((data) =>
      setCurrentGig({
        artist: parseInt(localStorage.getItem("auth_token")),
        gig_name: data.gig_name,
        description: data.description,
        date: data.date,
        venue: data.venue,
        location: data.location,
        instruments_needed: data.instruments_needed.id,
        skill_level_needed: data.skill_level_needed.id,
        photo_link: data.photo_link,
        genre: data.genre.id,
      })
    );
  }, [gigId]);

  const updateGigState = (evt) => {
    evt.preventDefault();
    const gigCopy = { ...currentGig };
    let key = evt.target.id;
    gigCopy[key] = evt.target.value;
    setCurrentGig(gigCopy);
  };

  return (
    <main>
      <div className="header">
        {/* <!--Content before waves--> */}
        <div className="inner-header flex">
          <form>
            <h3>Edit GIG</h3>

            <fieldset>
              <label htmlFor="inputGigName">Gig Name</label>
              <input
                id="gig_name"
                type="text"
                value={currentGig.gig_name}
                onChange={updateGigState}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputLocation">Location </label>
              <input
                id="location"
                type="text"
                value={currentGig.location}
                onChange={updateGigState}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputDate"> Date/Time </label>
              <input
                id="date"
                type="date-time-local"
                value={currentGig.date}
                onChange={updateGigState}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputDescription">Description</label>
              <input
                id="description"
                type="text"
                value={currentGig.description}
                onChange={updateGigState}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputLastName">Venue</label>
              <input
                id="venue"
                type="text"
                value={currentGig.venue}
                onChange={updateGigState}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputLocation">Photo Link</label>
              <input
                id="photo_link"
                type="text"
                value={currentGig.photo_link}
                onChange={updateGigState}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputSkillLevel">Instruments Needed</label>
              <select
                id="instruments_needed"
                value={currentGig.instruments_needed}
                onChange={updateGigState}
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
              <label htmlFor="inputSkillLevel">Skill Level Needed</label>
              <select
                id="skill_level_needed"
                value={currentGig.skill_level_needed}
                onChange={updateGigState}
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
              <label htmlFor="inputGenre">Genre</label>
              <select
                id="genre"
                value={currentGig.genre}
                onChange={updateGigState}
              >
                <option value="0">Choose a Genre</option>
                {genres.map((g) => {
                  return (
                    <option key={`genre--${g.id}`} value={`${g.id}`}>
                      {`${g.label}`}
                    </option>
                  );
                })}
              </select>
            </fieldset>

            <fieldset>
              <button
                type="submit"
                onClick={(evt) => {
                  evt.preventDefault();
                  const gig = {
                    id: gigId,
                    gig_name: currentGig.gig_name,
                    description: currentGig.description,
                    date: currentGig.date,
                    venue: currentGig.venue,
                    location: currentGig.location,
                    instruments_needed: currentGig.instruments_needed,
                    skill_level_needed: currentGig.skill_level_needed,
                    photo_link: currentGig.photo_link,
                    genre: currentGig.genre,
                  };
                  updateGig(gig, currentGig).then(() =>
                    history.push("/artist-dashboard")
                  );
                }}
              >
                UPDATE
              </button>

              <div>
                <Link to="/artist-dashboard">
                  <button>CANCEL</button>
                </Link>
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
