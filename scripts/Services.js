import { getServices, getParkAreas, getServiceLog } from "./database.js"


const services = getServices()
const areas = getParkAreas()
const areaServiceLog = getServiceLog()


export const ServiceList = () => {
    let html = ""

    for (const service of services) {
        html += `<a id="service--${service.id}">\n${service.type}\n</a>`
    }

    return html
}


// function that will get all services of serviceLog 
const filterServiceLog = (id) => {

    // define empty array serviceId 
    let filterService = []

    // iterate the array value of serviceLog to return serviceId
    for (const match of areaServiceLog) {
        if (id === match.serviceId) {
            filterService.push(match)
        }
    }
    return filterService
}



// function that will take infos from function above to help find serviceLog.serviceId to service.id
// create function that will build a string of locations where each service is available 
const matchingServiceLocation = (parkAreas) => {

    //let serviceLocation = ""
    let listLocation = []

    // iterate serviceId to match parkAreaId
    for (const allAreas of areas) {
        for (const area of parkAreas) {
            if (allAreas.id === area.parkAreaId) {
                //serviceLocation = area
                listLocation.push(allAreas)
            }
        }
        /*
        if (listLocation === 2) { 
            serviceLocation = `${listLocation[0].name} and ${listLocation[1].name}`
        } else if (listLocation.length === 1) {
            serviceLocation = `${listLocation[0].name}.`
        }
        */
    }


    return listLocation


}

const stringOfArea = (parkArea) => {
    let string = ``
    
    for (const p of parkArea) {
       

        string += `${p.name}`


    }
    return string
}

// add a click event for list of services located above park areas
// call function from above to 

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("service")) {
            const [, serviceId] = itemClicked.id.split("--")

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {

                    const parkService = filterServiceLog(service.id)
                    const parkArea = matchingServiceLocation(parkService)
                    const string = stringOfArea(parkArea)

                    window.alert(`${service.type} is available in ${string}`)
                }
            }

        }
    }
)