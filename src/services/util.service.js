export default {
    saveToStorage,
    loadFromStorage,
    makeId,
    capitalize,
    debounce,
    stringToHslColor,
    getFilename,
    getRandomIntInclusive,
    arraysAreEqual,
    sortArrayByValue,
    sortByValue,
    enableEnter
};

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function capitalize(str) {
    const words = str.split(' ');
    console.log('🚀 ~ file: util.service.js ~ line 17 ~ capitalize ~ words', words);
    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function debounce(func, delay, immediate) {
    let timerId;
    return (...args) => {
        const boundFunc = func.bind(this, ...args);
        clearTimeout(timerId);
        if (immediate && !timerId) {
            boundFunc();
        }
        const calleeFunc = immediate
            ? () => {
                  timerId = null;
              }
            : boundFunc;
        timerId = setTimeout(calleeFunc, delay);
    };
}

function stringToHslColor(str, s, l) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var h = hash % 360;
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}

function getFilename(url) {
    const urlSplit = url.split('?');
    if (urlSplit.length > 1) {
        urlSplit.pop();
        url = urlSplit[0];
    } else url = urlSplit.pop();
    const filename = url.split('/').pop();
    return filename;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function saveToStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = sessionStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

//Compare arrays
function arraysAreEqual(a, b) {
    for (var i = 0; i < a.length; i++)
        if (a[i] != b[i])
            return false;
    return true;
}

//Sort array by value
function sortArrayByValue(arr) {
    arr.sort((a, b) => (a.value > b.value) ? 1 : -1)
}

//Sort object by value
function sortByValue(object) {
    sortByValue = object.sort(function (a, b) {
        return a.value - b.value;
    })
    return sortByValue
}

//enaable enter key in form
function enableEnter() {
    var input = document.getElementById('text');
    input.addEventListener("keyup", function (event) {
        if (event.key === 13) {
            event.preventDefault();
            document.getElementById('submit-btn').click();
        }
    });
}