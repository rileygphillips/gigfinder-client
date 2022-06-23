import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { ArtistRegister } from "./auth/ArtistRegister"
import { MusicianRegister } from "./auth/MusicianRegister"
import Header from "../LoginLogo"

export const App = () => (
    <>
    <div className="header">
        <Header />{" "}
      </div>
        <Route render={() => {
            if (localStorage.getItem("auth_token")) {
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/artistregister">
            <ArtistRegister />
        </Route>

        <Route path="/musicianregister">
            <MusicianRegister />
        </Route>

    

    </>
)
