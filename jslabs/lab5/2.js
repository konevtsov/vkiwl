function firstUniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
a = prompt("Строка: ", "длвоадфлоыва");

alert(firstUniqueChar(a));

function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

console.log(generateRandomString(10));

a = Number(prompt("Длина паролля: ", 5));
alert(generateRandomString(a));


function getUniqueChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (result.indexOf(char) === -1) {
            result += char;
        }
    }
    return result;
}
a = prompt("Строка: ", "здеськакаятострока");
alert(getUniqueChars(a)); 