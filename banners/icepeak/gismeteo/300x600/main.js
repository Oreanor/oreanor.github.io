window.onload = function() {

  var video = document.getElementById("video");

  var playButton = document.getElementById("bPlay");
  var playImg = document.getElementById("play");
  var muteButton = document.getElementById("bSound");
  var sound1 = document.getElementById("sound1");
  var sound2 = document.getElementById("sound2");

  video.muted = true;

  playButton.addEventListener("click", function() {
	  if (video.paused) {
	    video.play();
	    playImg.style.display = "none";
	  } else {
	    video.pause();
	    playImg.style.display = "block";
	  }
	});
  muteButton.addEventListener("click", function() {
	  if (!video.muted) {
	    video.muted = true;
	    sound1.style.display = "none";
	    sound2.style.display = "block";
	  } else {
	    video.muted = false;
	    sound1.style.display = "block";
	    sound2.style.display = "none";
	  }

	});

}