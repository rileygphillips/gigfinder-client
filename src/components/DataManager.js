export const getAllGigs = () => {
    return fetch("http://localhost:8000/gigs")
    .then(res => res.json())
  }

    export const getAllArtists = () => {
    return fetch("http://localhost:8000/artists")
    .then(res => res.json())
  }

  export const getAllMusicians = () => {
    return fetch("http://localhost:8000/musicians")
    .then(res => res.json())
  }

  export const getAllGenres = () => {
    return fetch("http://localhost:8000/genres")
    .then(res => res.json())
  }

  export const getSingleMusician = (id) => {
    return fetch(`http://localhost:8000/musicians/${id}`)
    .then(res => res.json())
  }

  export const getSingleArtist= (id) => {
    return fetch(`http://localhost:8000/artists/${id}`)
    .then(res => res.json())
  }

  export const getSingleGig = (id) => {
    return fetch(`http://localhost:8000/gigs/${id}`)
    .then(res => res.json())
  }

  export const getUserGigs = (id) => {
    return fetch(`http://localhost:8000/gigs/current_artist_list`, {
    headers: {
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
  }})
    
    .then(res => res.json())
  }

  export const getGigsByUser = (id) => {
    return fetch(`http://localhost:8000/gigs?artist=${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
      }})
    .then(res => res.json())
  }

  export const updateGig = (gig) => {
    return fetch(`http://localhost:8000/gigs/${gig.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gig)
    })
}