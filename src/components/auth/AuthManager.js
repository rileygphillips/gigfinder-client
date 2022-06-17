export const registerUser = (user) => {
  return fetch("http://localhost:8000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
}

export const loginUser = (user) => {
  return fetch("http://127.0.0.1:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
}

export const getAllInstruments = () => {
  return fetch("http://localhost:8000/instruments")
  .then(res => res.json())
}

export const getAllGenres = () => {
  return fetch("http://localhost:8000/genres")
  .then(res => res.json())
}

export const getAllSkillLevels = () => {
  return fetch("http://localhost:8000/skill_levels")
  .then(res => res.json())
}