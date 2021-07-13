import { getAllTeams, saveUserTeams } from "./dataAccess.js"

export const ChooseTeam = () => {
    return `
    <div class="choose_teams">
        <h3>Choose the First Team</h3>
            <select id="team_one">
                ${teamOptions()}
            </select>
        <h3>Choose the Second Team</h3>
            <select id="team_two">
                ${teamOptions()}
            </select>
        <h3>Choose the Third Team</h3>
            <select id="team_three">
                ${teamOptions()}
            </select>
    </div>
    <button id="save_teams">Save Teams</button>
    `
}

const teamOptions = () => {
    const teams = getAllTeams()

    let html = "<option>please choose a team"
    html += teams.map(team => {
        return `<option>${team.teamName}</option>`
    }).join("")

    html += "</option>"
    return html
}

let selectedTeamOne
document.addEventListener("change", e => {
    if (e.target.id === "team_one") {
        const selectedIndex = document.getElementById("team_one").options.selectedIndex
        selectedTeamOne = document.getElementById("team_one").options[selectedIndex].text
    }
})

let selectedTeamTwo
document.addEventListener("change", e => {
    if (e.target.id === "team_two") {
        const selectedIndex = document.getElementById("team_two").options.selectedIndex
        selectedTeamTwo = document.getElementById("team_two").options[selectedIndex].text
    }
})

let selectedTeamThree
document.addEventListener("change", e => {
    if (e.target.id === "team_three") {
        const selectedIndex = document.getElementById("team_three").options.selectedIndex
        selectedTeamThree = document.getElementById("team_three").options[selectedIndex].text
    }
})

document.addEventListener("click", e => {
    if (e.target.id === "save_teams") {

        const dataToSave = [
            selectedTeamOne,
            selectedTeamTwo,
            selectedTeamThree
        ]

        saveUserTeams(dataToSave)
    }
})