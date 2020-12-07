
export function saveDataToStorage(data, key) {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (e) {
        console.log("Fail save data to local storage. Cause: " + e);
    }
}

export function getDataFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        if (data === null) {
            return undefined
        }

        return JSON.parse(data);
    } catch (e) {
        console.log("Fail get data from local storage. Cause: " + e);
        return undefined;
    }
}