import { getGuests } from "./database.js"

const guests = getGuests() 

export const ParkGuests = () => { 
    let html = "" 

    for (const guest of guests) { 
        html += `<p>${guest.name}</p>`
    }
    return html 
}

