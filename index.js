const handleKeyBoardKeyUpEvent = (event) => {
  const playerPressed = event.key;
  console.log(playerPressed);

  const curentAlphabetElement = document.getElementById("current_alphabet");
  const currentAlphabet = curentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(expectedAlphabet, playerPressed);

  // Check Matched or not //
  if (playerPressed === expectedAlphabet) {
    console.log("Match");
    console.log("You have pressly currectly", expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("Key is not match");
  }
};

document.addEventListener("keyup", handleKeyBoardKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log("your random alphabet", alphabet);

  // Set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current_alphabet");
  currentAlphabetElement.innerText = alphabet;

  // Set Background color //
  setBackgroundColorId(alphabet);
}

const play = () => {
  hiddrnFunction("home_screen");
  displayFunction("play_ground");
  continueGame();
};
//  28 number module er 2 number ta ses and 3 number ta start -->
