import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "../auth/Auth.css";
import { getAllInstruments, getAllSkillLevels } from "../auth/AuthManager";
import { getAllGenres, getSingleGig } from "../DataManager";

export const CreateGig = ({ editing }) => {
  const [form, updateForm] = useState({
    gig_name: "",
    description: "",
    date: "",
    venue: "",
    location: "",
    instruments: 0,
    skill_level: 0,
    photo_link: "",
    genre: 0,
  });
  const [instruments, setInstruments] = useState([]);
  const [skillLevels, setSkillLevels] = useState([]);
  const [genres, setGenres] = useState([]);
  const { gigId } = useParams();
  const history = useHistory();

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
    if (editing) {
      getSingleGig(gigId).then(updateForm);
    }
  }, []);

  const submitPost = (e) => {
      e.preventDefault();
    const newGig = {
      userId: parseInt(localStorage.getItem("auth_token")),
      gig_name: form.gig_name,
      description: form.description,
      date: form.date,
      venue: form.venue,
      location: form.location,
      instruments_needed: form.instruments_needed,
      skill_level_needed: form.skill_level_needed,
      photo_link: form.photo_link,
      genre: form.genre,
    };
    //Editing a gig
    // if (
    //   newGig.gig_name &&
    //   newGig.description &&
    //   newGig.date &&
    //   newGig.location &&
    //   newGig.skill_level_needed &&
    //   newGig.photo_link &&
    //   newGig.genre &&
    //   newGig.venue &&
    //   newGig.instruments_needed
    // ) {
      if (editing) {
        newGig.id = parseInt(gigId);

        return fetch(
          `http://localhost:8000/gigs/${gigId}`,
          "PUT",
          JSON.stringify(newGig)
        ).then(() => history.push(`/artist-dashboard`));
      } else {

        return fetch(
          `http://localhost:8000/gigs`, {
            method: "POST",
            headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(newGig)
          }
          
        ).then(() => history.push(`/artist-dashboard`));
      }

  };

  return (
    <main>
      <div className="header">
        {/* <!--Content before waves--> */}
        <div className="inner-header flex">
          <form>
            <h3>CREATE NEW GIG</h3>

            <fieldset>
              <label htmlFor="inputGigName">Gig Name</label>
              <input
                
                id="gig"
                type="text"
                value={form.gig_name}
                onChange={(e) => {
                  const copy = { ...form };
                  copy.gig_name = e.target.value;
                  updateForm(copy);
                }}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputLocation">Location </label>
              <input
                
                id="gig"
                type="text"
                value={form.location}
                onChange={(e) => {
                  const copy = { ...form };
                  copy.location = e.target.value;
                  updateForm(copy);
                }}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputDate"> Date/Time </label>
              <input
                
                id="gig"
                type="datetime-local"
                value={form.date}
                onChange={(e) => {
                  const copy = { ...form };
                  copy.date = e.target.value;
                  updateForm(copy);
                }}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputDescription">Description</label>
              <input
                
                id="gig"
                type="text"
                value={form.description}
                onChange={(e) => {
                  const copy = { ...form };
                  copy.description = e.target.value;
                  updateForm(copy);
                }}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputLastName">Venue</label>
              <input
                
                id="gig"
                type="text"
                value={form.venue}
                onChange={(e) => {
                  const copy = { ...form };
                  copy.venue = e.target.value;
                  updateForm(copy);
                }}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputLocation">Photo Link</label>
              <input
                
                id="gig"
                type="text"
                value={form.photo_link}
                onChange={(e) => {
                  const copy = { ...form };
                  copy.photo_link = e.target.value;
                  updateForm(copy);
                }}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputSkillLevel">Instruments Needed</label>
              <select
                name="instruments"
                onChange={(e) => {
                  const copy = { ...form };
                  copy.instruments_needed = parseInt(e.target.value);
                  updateForm(copy);
                }}
                
                value={form.instruments_needed}
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
                name="skill_level"
                onChange={(e) => {
                  const copy = { ...form };
                  copy.skill_level_needed = parseInt(e.target.value);
                  updateForm(copy);
                }}
                
                value={form.skill_level_needed}
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
                name="genre"
                onChange={(e) => {
                  const copy = { ...form };
                  copy.genre = parseInt(e.target.value);
                  updateForm(copy);
                }}
                
                value={form.genre}
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

            <button onClick={(e) => {
                    submitPost(e)
                }} className="submit-button">
                    Submit
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
