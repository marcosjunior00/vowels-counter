const vowelsCount = (str: String): Number => {
    let i: Number = 0
    if (str.length > 0) {
        let newStr = str.toLocaleLowerCase()
        const vowelRegex = /[aãáàâeéèêiíìîoóòôõuùúûü]/gi
        i = (newStr.match(vowelRegex) || [])?.length
    }
    return i
}

const string: String = 'Olá, mundo!'

console.log(vowelsCount(string))