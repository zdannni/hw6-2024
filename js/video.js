// Initialize the video element and turn off autoplay and turn off looping.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	video.autoplay = false;
	video.loop = false;
});

// Play the video and update the volume information.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const playButton = document.getElementById('play');
	const volumeDisplay = document.getElementById('volume');

	playButton.addEventListener('click', function () {
		if (video.paused) {
			video.play();
			playButton.textContent = 'Pause Video';
			volumeDisplay.textContent = (video.volume * 100).toFixed(0) + '%';
		} else {
			video.pause();
			playButton.textContent = 'Play Video';
		}
	});

	const volumeSlider = document.getElementById('slider');
	volumeSlider.addEventListener('input', function () {
		const volume = volumeSlider.value;
		video.volume = volume / 100;
		volumeDisplay.textContent = volume + '%';
	});
});

// Pause the video.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const pauseButton = document.getElementById('pause');
	const volumeDisplay = document.getElementById('volume');

	pauseButton.addEventListener('click', function () {
		if (!video.paused) {
			video.pause();
			volumeDisplay.textContent = (video.volume * 100).toFixed(0) + '%';
		}
	});

	const playButton = document.getElementById('play');
	playButton.addEventListener('click', function () {
		if (video.paused) {
			video.play();
			volumeDisplay.textContent = (video.volume * 100).toFixed(0) + '%';
		} else {
			video.pause();
			volumeDisplay.textContent = (video.volume * 100).toFixed(0) + '%';
		}
	});

	const volumeSlider = document.getElementById('slider');
	volumeSlider.addEventListener('input', function () {
		const volume = volumeSlider.value;
		video.volume = volume / 100;
		volumeDisplay.textContent = volume + '%';
	});
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const slowerButton = document.getElementById('slower');

	slowerButton.addEventListener('click', function () {
		video.playbackRate -= 0.1;
		console.log('New video speed: ' + video.playbackRate);
	});
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const fasterButton = document.getElementById('faster');

	fasterButton.addEventListener('click', function () {
		video.playbackRate += 0.1;
		console.log('New video speed: ' + video.playbackRate);
	});
});

// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const skipButton = document.getElementById('skip');

	skipButton.addEventListener('click', function () {
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log('Current location: ' + video.currentTime);
	});
});

// Mute/unmute the video and update the text in the button.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const muteButton = document.getElementById('mute');

	muteButton.addEventListener('click', function () {
		if (video.muted) {
			video.muted = false;
			muteButton.textContent = 'Mute';
		} else {
			video.muted = true;
			muteButton.textContent = 'Unmute';
		}
	});
});

// Change the volume based on the slider and update the volume information.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const playButton = document.getElementById('play');
	const volumeDisplay = document.getElementById('volume');

	playButton.addEventListener('click', function () {
		if (video.paused) {
			video.play();
			playButton.textContent = 'Pause Video';
			volumeDisplay.textContent = video.volume * 100 + '%';
		} else {
			video.pause();
			playButton.textContent = 'Play Video';
		}
	});

	const volumeSlider = document.getElementById('slider');
	volumeSlider.addEventListener('input', function () {
		const volume = volumeSlider.value;
		video.volume = volume / 100;
		volumeDisplay.textContent = volume + '%';
	});
});

// Utilize the existing oldSchool class on the video element.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const volumeSlider = document.getElementById('vintage');

	volumeSlider.addEventListener('click', function () {
	video.classList.add('oldSchool');
	});
});

// Remove the oldSchool class from the video.
document.addEventListener('DOMContentLoaded', function () {
	const video = document.getElementById('player1');
	const removeButton = document.getElementById('orig');

	removeButton.addEventListener('click', function () {
		video.classList.remove('oldSchool');
	});
});
