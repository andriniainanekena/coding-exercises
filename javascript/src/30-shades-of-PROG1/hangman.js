export function hangman(word, guesses) {
  let guessed = [];
  let wrong = 0;
  for(let i=0; i<guesses.length; i++) {
    if(word.indexOf(guesses[i]) !== -1) {
      if(guessed.indexOf(guesses[i]) === -1) {
        guessed.push(guesses[i]);
      }
    } else {
      wrong++;
      if(wrong >= 6) {
        return false;
      }
    }
  }
  for(let i=0; i<word.length; i++) {
    if(guessed.indexOf(word[i]) === -1) {
      return false;
    }
  }
  return true;
}


