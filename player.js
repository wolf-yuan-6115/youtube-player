const ytdl = require("discord-ytdl-core");
const Speaker = require('speaker');
const Volume = require("pcm-volume");

const speaker = new Speaker({
	channels: 2,
	bitDepth: 16,
	sampleRate: 48000
});
const volume = new Volume();

async function play(url) {
	let stream = await ytdl(url, {
		opusEncoded: false,
		highWaterMark: 1 << 25
	});
  volume.pipe(speaker);
	stream.pipe(volume);
  volume.setVolume(0.8)
}

play("https://www.youtube.com/watch?v=ZNFKZI7L9xE");