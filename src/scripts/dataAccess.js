const applicationState = {}
const API = "http://localhost:1111"

let teams = []
export const fetchTeams = () => {
    return fetch(`${API}/allTeams`)
        .then(res => res.json())
        .then((allTeams) => {
            teams = allTeams
        })
}
export const getAllTeams = () => {
    return teams.map(allTeam => ({...allTeam }))
}

// export const saveUserTeams = (data) => {
//     const fetchOptions = {
//         method: "POST",
//         headers: {
//             "content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     }
//     return fetch(`${API}/userTeams`, fetchOptions).catch()
// }

export const saveUserTeams = (data) => {
    applicationState.userTeams = data
}

export const getUserTeams = () => {
    return applicationState.userTeams

}