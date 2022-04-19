function capitalize(string) {
    let firstLetter = string.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    let restOfString = string.slice(1) //con un solo numero devuelve desde ese numero en adelante

    let result = firstLetterCap.concat(restOfString);
    return result

}

module.exports = capitalize;