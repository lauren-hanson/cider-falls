import { getServices } from "./database.js"

const listOfServices = getServices() 

export const serviceList = () => { 
    let html = ""

    for (const service of listOfServices) { 
        html += `<id="service--${service.id}">${service.type}\n`
    }
    return html
}