window.onload = function() {

  var video = document.getElementById("video");

  var playButton = document.getElementById("bPlay");
  var muteButton = document.getElementById("bSound");

  video.muted = true;

  playButton.addEventListener("click", function() {
	  if (video.paused) {
	    video.play();
	    playButton.innerHTML = "Остановить видео";
	  } else {
	    video.pause();
	    playButton.innerHTML = "Воспроизвести видео";
	  }
	});
  muteButton.addEventListener("click", function() {
	  if (!video.muted) {
	    video.muted = true;
	    muteButton.innerHTML = "Включить звук";
	  } else {
	    video.muted = false;
	    muteButton.innerHTML = "Выключить звук";
	  }

	});

}