import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllGenres, registerUser } from "./AuthManager";
import "./Auth.css";

// TODO: This should get you started on registering a new user.
// Add new fields depending on your server side registration
export const ArtistRegister = () => {
  const username = useRef();
  const password = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const name = useRef();
  const bio = useRef();
  const location = useRef();
  const genre = useRef();
  const music_link = useRef();
  const website_link = useRef();
  const photo_link = useRef();
  const history = useHistory();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getAllGenres().then((genres) => {
      setGenres(genres);
    });
  }, []);
  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      is_artist: true,
      username: username.current.value,
      password: password.current.value,
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      email: email.current.value,
      name: name.current.value,
      bio: bio.current.value,
      location: location.current.value,
      genre: genre.current.value,
      music_link: music_link.current.value,
      website_link: website_link.current.value,
      photo_link: photo_link.current.value,
    };

    registerUser(newUser).then((res) => {
      if ("token" in res) {
        localStorage.setItem("auth_token", res.token);
        history.push("/");
      }
    });
  };

  return (
    <main>
      <div className="header">
        {/* <!--Content before waves--> */}

        <div>
          <Link to="/artistregister">ARTIST</Link>{" "}
          <Link to="/musicianregister">MUSICIAN</Link>
        </div>

        <div className="inner-header flex">
          <form onSubmit={handleRegister}>
            <h3>ARTIST REGISTER</h3>

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
              <label htmlFor="inputArtistName">Artist Name</label>
              <input
                ref={name}
                type="text"
                name="artistName"
                placeholder="Artist Name"
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
              <label htmlFor="inputGenre">Genre</label>
              <select
                name="selectGenre"
                id="selectGenre"
                ref={genre}
                value={genre.genre}
              >
                <option value="0">Choose an Genre</option>
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
              <label htmlFor="inputMusicLink">Website Link</label>
              <input
                ref={website_link}
                type="text"
                name="websiteLink"
                placeholder="Website Link"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="inputMusicLink">Music Link</label>
              <input
                ref={music_link}
                type="text"
                name="musicLink"
                placeholder="Music Link"
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
              <button type="submit">Register</button>
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
