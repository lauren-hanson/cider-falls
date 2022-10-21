import { getGuests, getParkAreas, getServices, getServiceLog } from "./database.js"

// contains array of parkAreas
const areas = getParkAreas()

// contains list of services  
const services = getServices()

// contains list of park guests 
const parkGuests = getGuests()

// contains an array where services are listed with area 
const parkAreaServices = getServiceLog()

export const ParkAreas = () => {

    // define variable to store HTML string 
    let html = ""

    // create a for loop to iterate through parkAreas to get name 
    for (const area of areas) {
        html += `<h2 id="area--${area.id}">${area.name}</h2>`

        // create a for loop to iterate through serviceLog
        for (const areaServices of parkAreaServices) {

            // create a nested array to iterate through services array
            for (const service of services) {

                // if statement to verify that parkArea.id === serviceLog.parkAreaId & serviceLog.serviceId === service.id so that we can print the correct services with parkArea
                if (area.id === areaServices.parkAreaId) {
                    if (areaServices.serviceId === service.id) {
                        html += `<li id="area--${area.id}">${service.type}</li>`
                    }
                }

            }

        }
    }

    // return html string 
    return html
}



// import ParkAreas() in main.js

// create function to add # of guests in each area 
const guestLocation = (area) => {

    let totalGuests = 0

    for (const guest of parkGuests) {
        if (guest.areaId === area.id) {
            totalGuests++
        }
    }
    return totalGuests
}



// create .addEventListener for parkGuests
// call guestLocation() function 
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("area")) {

            const [, areaId] = itemClicked.id.split("--")

            for (const area of areas) {
                if (area.id === parseInt(areaId)) {

                    const totalGuestsInArea = guestLocation(area)

                    window.alert(`There are ${totalGuestsInArea} guests at ${area.name}.`)
                }

            }

        }
    }

)
