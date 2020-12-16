const AUTH_REQUEST_URL = "https://loft-taxi.glitch.me/auth";
const REGISTER_REQUEST_URL = "https://loft-taxi.glitch.me/register";
const SAVE_CARD_DATA_URL = "https://loft-taxi.glitch.me/card";
const GET_CARD_DATA_URL = "https://loft-taxi.glitch.me/card?token=";

export async function doGet(httpAddress = '') {
    return await fetch(httpAddress)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        })
}

export async function doPost(httpAddress = '', data = {}) {
    const response = await fetch(httpAddress, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).catch((error) => {
        console.error(error);
    });

    return await response.json();
}

export async function doLogin(login, password) {
    return doPost(AUTH_REQUEST_URL,
        {
            email: login,
            password: password
        }
    ).then((result) => {
        return result;
    })
}

export async function doRegister(login, password, name, surname) {
    return doPost(REGISTER_REQUEST_URL,
        {
            email: login,
            password: password,
            name: name,
            surname: surname
        }
    ).then((result) => {
        return result;
    })
}

export async function saveCardData({cardData}) {
    return doPost(SAVE_CARD_DATA_URL, cardData)
        .then((result) => {
            return result;
        })
}

export async function getCardData(token) {
    const requestUrl = GET_CARD_DATA_URL + token;
    return doGet(requestUrl)
        .then((result) => {
            return result;
        })
}