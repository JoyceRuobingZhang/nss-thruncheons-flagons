import { getUserTeams } from "./dataAccess.js"

export const Rounds = () => {
        const userTeams = getUserTeams()

        return `
    <h3>Round One Score</h3>
    ${
        userTeams.map(userTeam => {
            return `
            <lable for="round_one">${userTeam}</lable>
            <input type="number" id="round_one"/>
            `
        }).join("")
    }

    <h3>Round Two Score</h3>
    ${
        userTeams.map(userTeam => {
            return `
            <lable for="round_two">${userTeam}</lable>
            <input type="number" id="round_two"/>
            `
        }).join("")
    }

    <h3>Round Two Score</h3>
    ${
        userTeams.map(userTeam => {
            return `
            <lable for="round_three">${userTeam}</lable>
            <input type="number" id="round_three"/>
            `
        }).join("")
    }
    `
}