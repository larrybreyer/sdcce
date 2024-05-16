function getWords(text) {
  // remove all punctuation
  text = text.replace(/\./g,'');
  text = text.replace(/\,/g,'');
  text = text.replace(/\:/g,'');
  text = text.toLowerCase();

  // convert to array
  let arrWords = text.split(' ');

  // sort array

  arrWords.sort();

  return arrWords;

}
function getUniqueWords(words) {
  let arrUniqueWords = [];

  // construct array
  for( let i =0; i < words.length; i++) {
    // if(words[i] !== 
    // It does not appear Zak knows what he is doing
    // Ah!  the words are already sorted.  He is dropping repeats.
  }

}
function init() {
  let text = 'With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience.'

  console.log('Welcome to the Wordlist Application');

  let words = getWords(text)
  console.log(words);
  
  // unique words
  let uniqueWords = getUniqueWords(words);



}

// vim: ft=javascript ai et ts=2 sw=2 nu
