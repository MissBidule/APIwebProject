async function getArmorsData (page) {

    var myHeaders = new Headers({
        "Content-Type": "application/json"
    });

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    var myRequest = new Request('https://mhw-db.com'+'/armor?q={"id":{"$gt":' + (page-1)*10 + ',"$lt":' + page*10 + '}}', requestOptions)

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
        console.log(array);
        return array
    });

    console.log(myAnswer[0])

    return myAnswer;
}

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
        console.log(array);
        return array
    });

    console.log(myAnswer[0])

    return myAnswer;
}

export { getArmorsData, getAllArmorsData }