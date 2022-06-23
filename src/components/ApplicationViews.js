import React from "react"
import { Route } from "react-router-dom"
import { ArtistDashboard } from "./ArtistView.js/ArtistDashboard"
import { EditArtistProfile } from "./ArtistView.js/ArtistEditProfile"
import { ArtistProfile } from "./ArtistView.js/ArtistProfile"
import { CreateGig } from "./ArtistView.js/CreateGig"
import { EditGig } from "./ArtistView.js/EditGig"
import { MusicianList } from "./ArtistView.js/MusicianList"
import { ArtistList } from "./MusicianView/ArtistList"
import { GigDetails } from "./MusicianView/GigDetails"
import { GigList } from "./MusicianView/GigList"
import { MusicianDashboard } from "./MusicianView/MusicianDashboard"
import { EditMusicianProfile } from "./MusicianView/MusicianEditProfile"
import { MusicianProfile } from "./MusicianView/MusicianProfile"


export const ApplicationViews = () => {
    return <>
        <Route exact path="/artist-dashboard">
        <ArtistDashboard />
        </Route>

        <Route exact path="/editartistprofile">
        <EditArtistProfile />
        </Route>

        <Route exact path="/creategig">
        <CreateGig/>
        </Route>

        <Route exact path="/edit-gig/:gigId(\d+)">
        <EditGig/>
        </Route>

        <Route exact path="/artist-profile/:artistId(\d+)">
        <ArtistProfile/>
        </Route>

        <Route exact path="/musician-list">
        <MusicianList />
        </Route>

        <Route exact path="/musician-dashboard">
        <MusicianDashboard />
        </Route>

        <Route exact path="/musician-profile/:musicianId(\d+)">
        <MusicianProfile/>
        </Route>

        <Route exact path="/gig-list">
        <GigList />
        </Route>

        <Route exact path="/gig-details/:gigId(\d+)">
        <GigDetails/>
        </Route>

        <Route exact path="/artist-list">     
        <ArtistList />
        </Route>

        <Route exact path="/editmusicianprofile">     
        <EditMusicianProfile />
        </Route>
    </>
}