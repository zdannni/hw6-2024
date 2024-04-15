// Add js here.

// Page Load
var video = document.getElementById("videoplayer");
video.load();
video.autoplay = false;
video.loop = false;

// Play Button
var playButton = document.getElementById("play");

function playVideo(){
	video.play();
}

playButton.addEventListener("click", playVideo);

// Pause Button
var pauseButton = document.getElementById("pause");

function pauseVideo(){
	video.pause();
}

pauseButton.addEventListener("click", pauseVideo);

// Slow Down
var slowDown = document.getElementById("slower");

function slowVideo(){
	if (video.playbackRate == 2){
		video.playbackRate = 1;
	}
	else if (video.playbackRate == 1){
		video.playbackRate = 0.5;
	}
	else if (video.playbackRate == 0.5){
		window.alert("Video is at slowest speed!");
	}
}

slowDown.addEventListener("click", slowVideo);

// Speed Up
var speedUp = document.getElementById("faster");

function speedVideo(){
	if (video.playbackRate == 0.5){
		video.playbackRate = 1;
	}
	else if (video.playbackRate == 1){
		video.playbackRate = 2;
	}
	else if (video.playbackRate == 2) {
		window.alert("Video is at fastest speed!");
	}
}

speedUp.addEventListener("click", speedVideo);

// Skip Ahead
var skipAhead = document.getElementById("skip");

function skipVideo(){
	video.currentTime = video.currentTime + 15;
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
	}
}

skipAhead.addEventListener("click", skipVideo);

// Mute
var muteButton = document.getElementById("mute");
var tempVolume = 0;

function muteVideo(){
	if (video.muted === false){
		video.muted = true;
		muteButton.textContent = 'Unmute';
		tempVolume = volumeSlider.value;
		volumeSlider.value = 0;
        volumeNumber.innerHTML = volumeSlider.value + "%";
	}
	else if (video.muted === true){
		video.muted = false;
		muteButton.textContent = 'Mute';
		volumeSlider.value = tempVolume;
        volumeNumber.innerHTML = volumeSlider.value + "%";
	}
}

muteButton.addEventListener("click", muteVideo);

// Volume Slider
var volumeSlider = document.getElementById("slider");
var volumeNumber = document.getElementById("volume");

function changeVolume(){
	video.volume = volumeSlider.value / 100;
	volumeNumber.innerHTML = video.volume * 100 + "%";
	if (video.volume == 0) {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    }
    else {
        video.muted = false;
        muteButton.textContent = 'Mute';
    }
}

volumeSlider.addEventListener("click", changeVolume);