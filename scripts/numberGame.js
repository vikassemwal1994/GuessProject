//floor() --> Round a number downward to its nearest integer
let randomNumber = Math.floor(Math.random() * 10) + 1;
//alert(randomNumber);

/*
    function called querySelector() to grab a reference to guess, result etc, 
    and then store it in a variable(s) 
    
    This is similar to what we do using CSS selectors. 
    When you want to do something to an element, you need to select it first.
*/
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function verifyGuess() {
    
    let userGuess = Number(guessField.value);
    //alert(userGuess);
   
        
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
       
        lastResult.textContent= 'Success!  right!';
        lastResult.style.color = 'yellow';
        lastResult.style.backgroundColor = 'green';
        
        lowOrHi.textContent = 'Matched';
        setGameOver();
      } else if (guessCount === 5) {
        lastResult.textContent = 'Game Over !!';
        setGameOver();
      } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';

        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Previous guess was  low!';
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Previous guess was high!';
          }
      }

    
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  function setGameOver() {
     // alert("END")

    guessField.disabled = true;
    guessSubmit.disabled = true;
    
    
   createResetButton();
        
   
  }

  /*
    Generate a new <button> element, 
        - set its text label to "Start new game", and 
        - add it to the bottom of our existing HTML.

    Set an event listener on our new button so that when it is clicked, 
        - a function called resetGame() is run
  */
  function createResetButton() {
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
   
  }

  function resetGame() {
    guessCount = 1;
  
    /*
        create a variable containing a list of all the paragraphs inside <div class="resultParas"> 
        using the querySelectorAll() method, 
        then  loop through each one, removing the text content of each
    */
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 10) + 1;
   // alert(randomNumber);
  }

  /*
    Add an event listener to the guessSubmit button. 
    This is a method that takes two input values (i.e  arguments):
        - the type of event we are listening out for (in this case click) as a string, and
        - the code we want to run when the event occurs (in this case the verifyGuess() function).
    Important: Don't need to specify the parentheses when writing it inside addEventListener().
  */
  guessSubmit.addEventListener('click', verifyGuess);