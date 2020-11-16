# TOnlineMediaplayer.Pause(): TOnlineMediaplayer

Pauses the current video.

An example usage which pauses the video 2 seconds after playback has started:

```javascript
const player1 = TOnlineMediaplayerFramework.New(document.getElementById('player-88299612'));
player1.Finish();

// Start playing
// Pause the player after 2 seconds, when playback has started
player1.On("play", function() {
	setInterval(function() {
		player1.Pause();
	}, 2000);
});

```

## Demo Page

Here's a [demo html page](html/TOnlineVideoplayer.Pause.html), with a [demo-script](html/TOnlineVideoplayer.Pause.js).

