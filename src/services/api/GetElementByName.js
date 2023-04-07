import { GetSortOrder } from '@/services/tools.js'

async function getItemByName(name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/items?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/items?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getArmorSetByName (name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/armor/sets?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/armor/sets?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getWeaponByName (name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/weapons?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/weapons?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getLocationByName (name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/locations?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/locations?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getMonsterByName (name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/monsters?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/monsters?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getArmorByName (name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };
    
    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/armor?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/armor?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getCharmsByName(name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/charms?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/charms?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getDecorationsByName (name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/decorations?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/decorations?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getSkillsByName (name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };
    
    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/skills?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/skills?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getAilmentsByName(name) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    //Weird error with %be%
    var myRequest1 = new Request('https://mhw-db.com'+'/ailments?q={"name":{"$like":"'+name+'%"}}', requestOptions)
    var myRequest2 = new Request('https://mhw-db.com'+'/ailments?q={"name":{"$like":"%_'+name+'%"}}', requestOptions)

    const myAnswer1 = await fetch(myRequest1, requestOptions) 
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

    const myAnswer2 = await fetch(myRequest2, requestOptions) 
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

    return myAnswer1.concat(myAnswer2);
}

async function getAllElementsByName(name) {
    var MonsterArray = await getMonsterByName(name);
        MonsterArray.forEach(element => {
        element.arrayType = 'Monster',
        element.url = 'monsterPage'
    });

    var LocationArray = await getLocationByName(name);
        LocationArray.forEach(element => {
        element.arrayType = 'Location',
        element.url = 'locationPage'
    });

    var WeaponArray = await getWeaponByName(name);
        WeaponArray.forEach(element => {
        element.arrayType = 'Weapon',
        element.url = 'weaponPage'
    });

    var ArmorSetArray = await getArmorSetByName(name);
        ArmorSetArray.forEach(element => {
        element.arrayType = 'Armor Set',
        element.url = 'setPage'
    });

    var ItemArray = await getItemByName(name);
        ItemArray.forEach(element => {
        element.arrayType = 'Item',
        element.url = 'itemPage'
    });

    var ArmorArray = await getArmorByName(name);
        ArmorArray.forEach(element => {
        element.arrayType = 'Armor Piece'
        element.url = 'armorPage'
    });

    var CharmsArray = await getCharmsByName(name);
        CharmsArray.forEach(element => {
        element.arrayType = 'Charm',
        element.url = 'charmPage'
    });

    var DecorationsArray = await getDecorationsByName(name);
        DecorationsArray.forEach(element => {
        element.arrayType = 'Decoration'
        element.url = 'decorationPage'
    });

    var SkillsArray = await getSkillsByName(name);
        SkillsArray.forEach(element => {
        element.arrayType = 'Skill'
        element.url = 'skillPage'
    });

    var AilmentsArray = await getAilmentsByName(name);
        AilmentsArray.forEach(element => {
        element.arrayType = 'Ailment'
        element.url = 'ailmentPage'
    });

    var AllElements =   MonsterArray.concat(LocationArray);
        AllElements =   AllElements.concat(WeaponArray);
        AllElements =   AllElements.concat(ArmorSetArray);
        AllElements =   AllElements.concat(ItemArray);
        AllElements =   AllElements.concat(ArmorArray);
        AllElements =   AllElements.concat(CharmsArray);
        AllElements =   AllElements.concat(DecorationsArray);
        AllElements =   AllElements.concat(SkillsArray);
        AllElements =   AllElements.concat(AilmentsArray);

    AllElements.sort(GetSortOrder('name'));

    return AllElements;
}

export { 
    getMonsterByName, getLocationByName, getWeaponByName, getArmorSetByName, getItemByName, getArmorByName, getCharmsByName, getDecorationsByName, getSkillsByName, getAilmentsByName,
    getAllElementsByName
    }