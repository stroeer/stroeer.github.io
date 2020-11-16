# TOnlineMediaplayer.IsPlaying(): Boolean

Returns either `true` or `false` depending on wether the video is playing or not.

An example usage might look like this:

```javascript
const player1 = TOnlineMediaplayerFramework.New(document.getElementById('player-88299612'));
player1.Finish();

document.getElementById("button1").addEventListener("click", function() {
	alert(player1.IsPlaying());
});

```

## Demo Page

Here's a [demo html page](html/TOnlineVideoplayer.IsPlaying.html), with a [demo-script](html/TOnlineVideoplayer.IsPlaying.js).

