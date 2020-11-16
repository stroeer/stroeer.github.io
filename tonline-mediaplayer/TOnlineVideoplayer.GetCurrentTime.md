# TOnlineMediaplayer.GetCurrentTime(): Number

Returns `Math.floor(videoEl.currentTime)`.

See [GetCurrentTimeFull(): Number](TOnlineVideoplayer.GetCurrentTimeFull.md)
for the full floating number (`videoEl.currentTime`).

An example usage might look like this:

```javascript
const player1 = TOnlineMediaplayerFramework.New(document.getElementById('player-88299612'));
player1.Finish();

player1.GetVideoEl().addEventListener("timeupdate", function() {
	console.log(player1.GetCurrentTime());
});

```

## Demo Page

Here's a [demo html page](html/TOnlineVideoplayer.GetCurrentTime.html), with a [demo-script](html/TOnlineVideoplayer.GetCurrentTime.js).

