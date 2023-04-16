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
  video.width = 300;
  video.height = 200;
}

function Normalsize() {
  var video = document.getElementById("hourofcode");
  video.width = 400;
  video.height = 225;
}

function Bigsize() {
  var video = document.getElementById("hourofcode");
  video.width = 500;
  video.height = 250;
}
document.addEventListener("DOMContentLoaded", function () {
  const heartIcon = document.querySelector(
    ".forth--part .forth--video .heart i"
  );

  function handleClick() {
    if (!heartIcon.classList.contains("clicked")) {
      heartIcon.classList.add("clicked");
      audio.play();
    } else {
      heartIcon.classList.remove("clicked");
    }
  }

  if (heartIcon) {
    heartIcon.addEventListener("click", handleClick);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");

  commentInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      // "Enter" key
      const commentText = commentInput.value.trim();

      if (commentText !== "") {
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = "";
      }
    }
  });
});
