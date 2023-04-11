import { weaponName, weaponType } from "../tools";

async function getWeaponByType (type) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest = new Request('https://mhw-db.com'+'/weapons?q={"type":"'+type+'"}', requestOptions)

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

    myAnswer.forEach(element => {
        var index = weaponType.findIndex((item) => item == element.type);
        element.typeName = weaponName[index];
    });

    return myAnswer;
}

async function getMonsterByType (type) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest = new Request('https://mhw-db.com'+'/monsters?q={"type":"'+type+'"}', requestOptions)

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

async function getArmorByType (type) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };
    
    //Weird error with %be%
    var myRequest = new Request('https://mhw-db.com'+'/armor?q={"type":"'+type+'"}', requestOptions)

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
    getMonsterByType, getArmorByType, getWeaponByType
    }