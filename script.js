var audio = new Audio("audio/tick.mp3");
let btn = document.getElementById("btn");
btn.onclick() = () => {
    console.log("tin");
  if (btn.click) {
    audio.play();
  } else {
    audio.pause();
  }
};
