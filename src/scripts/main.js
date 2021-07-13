import { ChooseTeam } from "./chooseTeam.js"
import { fetchTeams } from "./dataAccess.js"
import { Rounds } from "./rounds.js"


const mainContainer = document.querySelector("#container")
document.addEventListener("click", e => {
    if (e.target.id === "start") {
        fetchTeams().then(() => {
            mainContainer.innerHTML = ChooseTeam()
        })
    }
})

document.addEventListener("click", e => {
    if (e.target.id === "save_teams") {
        fetchTeams().then(() => {
            mainContainer.innerHTML = Rounds()
        })
    }
})