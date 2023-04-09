function PlayPause() {
  var video = document.getElementById("hourofcode");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function Smallsize() {
  var video = document.getElementById("hourofcode");
  video.width = 200;
}

function Normalsize() {
  var video = document.getElementById("hourofcode");
  video.width = 400;
}

function Bigsize() {
  var video = document.getElementById("hourofcode");
  video.width = 600;
}
