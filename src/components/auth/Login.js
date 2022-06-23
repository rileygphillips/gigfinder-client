import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"
import { loginUser } from "./AuthManager"

export const Login = () => {
  const username = useRef()
  const password = useRef()
  const invalidDialog = useRef()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user)
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) { 
          localStorage.setItem("auth_token", res.token)
          localStorage.setItem("is_artist", res.is_artist)
          res.is_artist === true ? history.push("/artist-dashboard") : history.push("/musician-dashboard")
        }
        else {
          invalidDialog.current.showModal()
        }
      })
  }

  return (
    <main >
      <div className="loginHeader">
{/* <!--Content before waves--> */}
        
        <div className="login-inner-header flex">
        <dialog ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>
      <section>
        <form onSubmit={handleLogin}>
          <fieldset>
            <label htmlFor="inputUsername"> Username</label>
            <input ref={username} type="username" id="username" placeholder="Username" required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input ref={password} type="password" id="password" placeholder="Password" required />
          </fieldset>
          <fieldset>
            <button type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
      <section>
        <Link to="/artistregister">Not a member yet?</Link>
      </section>
        </div>

        {/* <!--Waves Container--> */}
        <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,66,66,0.7)" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.3)" />
        </g>
        </svg>
        </div>
        {/* <!--Waves end--> */}

</div>

      
    </main>
  )
}
