async function getAllArmorsData() {
    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/armor', requestOptions)

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

async function getAllItemsData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/items', requestOptions)

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

async function getAllArmorSetsData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/armor/sets', requestOptions)

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

async function getAllWeaponsData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/weapons', requestOptions)

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

async function getAllLocationsData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/locations', requestOptions)

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

async function getAllMonstersData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/monsters', requestOptions)

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

async function getAllCharmsData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/charms', requestOptions)

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

async function getAllDecorationsData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/decorations', requestOptions)

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

async function getAllSkillsData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/skills', requestOptions)

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

async function getAllAilmentsData() {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/ailments', requestOptions)

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

export {    getAllArmorsData, 
            getAllMonstersData,
            getAllCharmsData,
            getAllLocationsData,
            getAllArmorSetsData,
            getAllWeaponsData,
            getAllAilmentsData,
            getAllDecorationsData,
            getAllSkillsData,
            getAllItemsData
        }