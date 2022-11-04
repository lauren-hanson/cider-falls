const database = { 
    parkAreas: [{ 
        id: 1, 
        name: "Lodge - Hotel & Restaurant", 
        img: "images/lodging.jpg"
    }, { 
        id: 2, 
        name: "Lost Wolf Hiking Trail"
    },  {
        id: 3, 
        name: "Chamfort River"
    }, { 
        id: 4, 
        name: "Gander River - Nature Perserve"
    }, { 
        id: 5, 
        name: "Campgrounds"
    }, { 
        id: 6, 
        name: "Pine Bluffs Trail"
    }], 
    guests: [{ 
        id: 1, 
        name: "Charlie Brown", 
        areaId: 5
    },
    { 
        id: 2, 
        name: "Linus van Pelt", 
        areaId: 3
    },
    { 
        id: 3, 
        name: "Peppermint Patty", 
        areaId: 2
    },
    { 
        id: 4, 
        name: "Sally Brown", 
        areaId: 1
    },
    { 
        id: 5, 
        name: "Snoopy", 
        areaId: 4
    }, 
    { 
        id: 6, 
        name: "Pig-Pen", 
        areaId: 2
    }, { 
        id: 7, 
        name: "Franklin", 
        areaId: 6
    }, 
    { 
        id: 8, 
        name: "Violet", 
        areaId: 2
    }, 
    { 
        id: 9, 
        name: "Frieda", 
        areaId: 5
    }], 
    services: [{ 
        id: 1, 
        type: "Lodging"
    }, {
        id: 2, 
        type: "Parking"
    }, {
        id: 3, 
        type: "Information"
    }, {
        id: 4, 
        type: "Picnicking"
    }, {
        id: 5, 
        type: "Hiking"
    }, {
        id: 6, 
        type: "Rafting"
    }, {
        id: 7, 
        type: "Canoeing"
    }, {
        id: 8, 
        type: "Fishing"
    }, {
        id: 9, 
        type: "Children Play Section"
    },
    {
        id: 10, 
        type: "Rock Climbing"
    }, { 
        id: 11, 
        type: "Zip Lines"
    }], 

// logs service with area of the park 
    serviceLog: [
    { id: 1, serviceId: 1, parkAreaId: 1},
    { id: 2, serviceId: 2, parkAreaId: 1},
    { id: 2, serviceId: 3, parkAreaId: 1},
    { id: 4, serviceId: 4, parkAreaId: 1},
    { id: 5, serviceId: 5, parkAreaId: 2},
    { id: 6, serviceId: 4, parkAreaId: 2},
    { id: 7, serviceId: 10, parkAreaId: 2},
    { id: 8, serviceId: 6, parkAreaId: 3},
    { id: 9, serviceId: 7, parkAreaId: 3},
    { id: 10, serviceId: 8, parkAreaId: 3}, 
    { id: 11, serviceId: 8, parkAreaId: 4}, 
    { id: 12, serviceId: 5, parkAreaId: 4}, 
    { id: 13, serviceId: 9, parkAreaId: 5}, 
    { id: 14, serviceId: 3, parkAreaId: 5}, 
    { id: 15, serviceId: 1, parkAreaId: 5}, 
    { id: 16, serviceId: 2, parkAreaId: 5}, 
    { id: 17, serviceId: 5, parkAreaId: 6}, 
    { id: 18, serviceId: 4, parkAreaId: 6}, 
    { id: 19, serviceId: 11, parkAreaId: 6}
    ]
}

export const getParkAreas = () => { 
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getGuests = () => { 
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => { 
    return database.services.map(service => ({...service}))
}

export const getServiceLog = () => { 
    return database.serviceLog.map(log => ({...log}))
}