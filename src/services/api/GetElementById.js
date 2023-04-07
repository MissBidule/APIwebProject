import { randOfTheDay, missingItem, missingArmorSet, missingWeapon, missingMonster } from '@/services/tools'

//1186 items missing 19 104 527 535 578 582 583 610 647 825 826 881 882 907 947 1060 1080 1081
async function getItemById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/items?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//371 sets missing 158
async function getArmorSetById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/armor/sets?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//1299 weapons missing : 1025 1173 1186 1208 1262 1263 1280
async function getWeaponById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/weapons?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//14 locations
async function getLocationById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/locations?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//58 monsters -> missing 46 and 47 (idk why)
async function getMonsterById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/monsters?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//22 missing
async function getArmorById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/armor?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//Too many missing elements
async function getCharmsById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/charms?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//No missing elements
async function getDecorationsById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/decorations?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//4 missing elements
async function getSkillsById (id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/skills?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//No missing elements
async function getAilmentsById(id) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/ailments?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

//RANDOM FUNCTIONS

async function getRandItem () {

    // Obtain sequential random numbers like so:
    var id = Math.floor(randOfTheDay('item') * 1186)+1;
    var badId = 0;

    while (missingItem.includes(id)) {
        id = Math.floor(randOfTheDay('item' + badId) * 1186)+1;
        ++badId;
    }

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/items?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

async function getRandArmorSet () {

    // Obtain sequential random numbers like so:
    var id = Math.floor(randOfTheDay('armor set') * 371)+1;
    var badId = 0;

    while (missingArmorSet.includes(id)) {
        id = Math.floor(randOfTheDay('armor set' + badId) * 371)+1;
        ++badId;
    }

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/armor/sets?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

async function getRandWeapon () {

    // Obtain sequential random numbers like so:
    var id = Math.floor(randOfTheDay('weapon') * 1299)+1;
    var badId = 0;

    while (missingWeapon.includes(id)) {
        id = Math.floor(randOfTheDay('weapon' + badId) * 1299)+1;
        ++badId;
    }

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/weapons?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

async function getRandLocation () {

    // Obtain sequential random numbers like so:
    var id = Math.floor(randOfTheDay('location') * 14)+1;

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/locations?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

async function getRandMonster () {

    // Obtain sequential random numbers like so:
    var id = Math.floor(randOfTheDay('monster') * 58)+1;
    var badId = 0;

    while (missingMonster.includes(id)) {
        id = Math.floor(randOfTheDay('monster' + badId) * 58)+1;
        ++badId;
    }

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };id

    var myRequest = new Request('https://mhw-db.com'+'/monsters?q={"id":'+id+'}', requestOptions)

    const myAnswer = await fetch(myRequest, requestOptions) 
    .then((response) => {
        if (response.status == 200) {
            return response.json() 
        }
        else {
            new Error(response.statusText)
        }
    })
    .then((array) => {
        return array
    });

    return myAnswer;
}

export { 
        getMonsterById, getRandMonster, 
        getLocationById, getRandLocation,
        getWeaponById, getRandWeapon, 
        getArmorSetById, getRandArmorSet, 
        getItemById, getRandItem,
        getArmorById, getCharmsById, getDecorationsById, getSkillsById, getAilmentsById
        }