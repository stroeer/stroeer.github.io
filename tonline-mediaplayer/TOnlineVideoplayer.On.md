# TOnlineMediaplayer.On(string eventName, function cb): TOnlineMediaplayer

Attaches event-listeners to the `eventName` event.

The following events are supported:

 - play
 - pause
 - seekStart
 - seeking
 - seekEnd
 - ended
 - mute
 - unmute
 - volumechange
 - firstStart
 - replay
 - enterFullscreen
 - exitFullscreen
 - firstQuartile
 - midpoint
 - thirdQuartile
 - videoError
 - videoSourceError
 - adLoaded
 - adCall
 - adClick
 - adPause
 - adResume
 - adError
 - adStart
 - adFirstQuartile
 - adMidpoint
 - adThirdQuartile
 - adComplete
 - playerLoaded
 - contentVideoStart
 - contentVideoPause
 - contentVideoResume
 - contentVideoEnded

There are multiple syntaxes which are all valid and can be used to attach event listeners:

```javascript
const player1 = TOnlineMediaplayerFramework.New(document.getElementById('player-88299612'));
player1.Finish();

const trackingFunction = function(evt, tonlineVideoplayer, eventName) {
	console.log("Event is: ", evt);
	console.log("Name of the event is: ", eventName);
	console.log("TOnlineVideoplayer is: ", tonlineVideoplayer);
};

// A single event
player1.On("play", trackingFunction);

// Multiple events

	// either like this:

	player1.On("pause", trackingFunction)
		.On("mute", trackingFunction);

	// or like this:

	player1.On("unmute, ended", trackingFunction);
```

## Demo Page

Here's a [demo html page](html/TOnlineVideoplayer.On.html), with a [demo-script](html/TOnlineVideoplayer.On.js).

