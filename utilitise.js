const hiddrnFunction = (even) => {
  const home_screen = document.getElementById(even);
  home_screen.classList.add("hidden");
};
const displayFunction = (even) => {
  const play_ground = document.getElementById(even);
  play_ground.classList.remove("hidden");
};

const setBackgroundColorId = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
};

const removeBackgroundColorById = (elemenId) => {
  const element = document.getElementById(elemenId);
  element.classList.remove("bg-orange-400");
};
function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   Get a random index between 0 - 25 //
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  console.log(alphabet);
  return alphabet;
}
