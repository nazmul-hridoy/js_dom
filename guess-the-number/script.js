// computer generate a random number
// user have to guess the unknown number
// if user win, -- say "You Win"
// if user lose, ask user to play again.

function guessGame() {
    let value = Math.random() * 11;
    let fixedValue = Math.floor(value);
    //console.log(fixedValue);
    let guess;
    do {
      guess = prompt('Guess a number between 1--10');
      console.log(fixedValue, guess);
      if (guess > fixedValue) {
        console.log('Your guess is high');
      }
      else if (guess < fixedValue) {
        console.log('your guess is low');
      }
      else{
          console.log('you win!!!')
      }
      
    } while(guess != fixedValue)
    
  
  }
  guessGame();