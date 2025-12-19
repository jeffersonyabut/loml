const audio = new Audio("/Public/soundtrack.mp3");

function playMusic(value) {
  if (value) {
    audio.volume = 0.3;
    audio.play();

    document.getElementById("mute").style.display = "none";
    document.getElementById("unmute").style.display = "flex";
  }

  if (!value) {
    audio.volume = 0;
    audio.pause();
    audio.currentTime = 0;

    document.getElementById("mute").style.display = "flex";
    document.getElementById("unmute").style.display = "none";
  }
}
