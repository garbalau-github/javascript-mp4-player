document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = videoVolume;

let video;
let display;
let progress;

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');

// Progress
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function speedUp() {
  video.play();
  video.playbackRate = 2;
}

function speedDown() {
  video.play();
  video.playbackRate = 0.5;
}

function speedNormal() {
  video.play();
  video.playbackRate = 1;
}

function videoVolume() {
  let v = this.value;
  video.volume = v / 100;
}

function progressUpdate() {
  // Get duration
  let d = video.duration;
  let c = video.currentTime;

  progress.value = (100 * c) / d;

  // Show output
  document.querySelector('#out').innerHTML = video.currentTime;
}

function videoRewind(event) {
  let w = this.offsetWidth;
  let o = event.offsetX;
  this.value = (o / w) * 100;
  video.pause();
  video.currentTime = video.duration * (o / w);
  video.play();
}
