import { ParkAreas } from "./ParkAreas.js"
import { ParkGuests } from "./Guest.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class="header">Cider Falls Park</h1> 
<div class="details"> 
    <div class="park_areas_container">
    <h2>Park Areas</h2> 
    <div class="park_container detail--column">
    ${ParkAreas()}</div></div>
    <div class="guests_container detail--column">
        <h2>Guests</h2> 
        ${ParkGuests()}</div>`


mainContainer.innerHTML = applicationHTML