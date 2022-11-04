import { ParkAreas } from "./ParkAreas.js"
import { ParkGuests } from "./Guest.js"
import { ServiceList } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<div class="header_container">
    <h1 class="header">Cider Falls Park</h1>
</div>

<div class="service_list"
    <h4>Park Services:</h4> 
    ${ServiceList()}
</div>

<div class="details"> 
    <div class="park_area">
            <h2>Park Areas</h2>
        <div class="park_areas_container">
                ${ParkAreas()}
        </div>
    </div>


    <div class="guests_container">
        <h2>Guests</h2> 
        ${ParkGuests()}
    </div>
</div>`



mainContainer.innerHTML = applicationHTML