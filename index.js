function playgame(){
  var sound = new Audio("dice.mp3");
  sound.play();
  var random1, random2;
  random1 = Math.floor(Math.random() * 6) + 1;
  random2 = Math.floor(Math.random() * 6) + 1;
  var filename1 = "images/dice" + random1 + ".png";
  var filename2 = "images/dice" + random2 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", filename1);
  document.querySelectorAll("img")[1].setAttribute("src", filename2);
  if (random1 > random2) {
    document.querySelector("h1").innerText = "Player 1 wins🔥";
  } else if (random1 < random2) {
    document.querySelector("h1").innerText = "Player 2 wins🔥";
  } else {
    document.querySelector("h1").innerText = "Its a Draw🌈";
  }
}
