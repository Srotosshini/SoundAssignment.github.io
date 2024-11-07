document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const seekBar = document.getElementById('seekBar');
    const muteButton = document.getElementById('muteButton');
    const volumeMaxButton = document.getElementById('volumeMaxButton');
    const volumeControl = document.getElementById('volumeControl');

    // Play/Pause button functionality
    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
            document.querySelector('.title').style.color = 'yellow';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
            document.querySelector('.title').style.color = 'white';
        }
    });

    // Update seek bar as audio plays
    audioPlayer.addEventListener('timeupdate', () => {
        const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        seekBar.value = value;
    });

    // Seek bar input functionality
    seekBar.addEventListener('input', () => {
        const time = (seekBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = time;
    });

    // Mute button functionality
    muteButton.addEventListener('click', () => {
        audioPlayer.muted = true;
        volumeControl.value = 0;
    });

    // Max volume button functionality
    volumeMaxButton.addEventListener('click', () => {
        audioPlayer.volume = 1;
        volumeControl.value = 100;
        audioPlayer.muted = false;
    });

    // Volume control input functionality
    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value / 100;
        audioPlayer.muted = false;
    });
});