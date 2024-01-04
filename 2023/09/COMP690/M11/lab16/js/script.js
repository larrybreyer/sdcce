function  getWords(text){
    text = text.replace(/\./g,' ')
    text = text.replace(/\,/g,' ')
    text = text.replace(/\:/g,' ')
    text = text.toLowerCase()

    let arrWords = text.split(' ')

    arrWords.sort()
    return arrWords
}
function getUniqueWords(words){
    // create an empty array to store unique words
    let arrUniqueWords = []

    // loop 
    for( let i = 0; i < words.length; i++) {
        if ( words[i] !== words[i - 1 ]){
            arrUniqueWords.push(words[1])
        }

    }
    return arrUniqueWords 

}
function init() {
    let text = 'With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience.'

//GET WORDS
let words = getWords(text)

// GET UNIQUE WORDS
let uniqueWords = getUniqueWords(words)
console.log(`number of words ${words.length}`)  // 78
console.log(`number of unique words ${uniqueWords.length}`) // 54


}

init()