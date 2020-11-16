# TOnlineMediaplayerFramework.LoadPlugin(): String

Loads a (TOnlineMediaplayer) plugin file.

An example usage might look like this:

```javascript
const player1 = TOnlineMediaplayerFramework.New(document.getElementById('player-88299612'));

TOnlineMediaplayerFramework.LoadCSS("../assets/css/tonline-mediaplayer-plugin-endscreen-recommendations.min.css", function(err) {
	if (err) return alert("Could not load CSS");
});
TOnlineMediaplayerFramework.LoadPlugin("../assets/css/tonline-mediaplayer-plugin-endscreen-recommendations.min.js", function(err) {
	if (err) return alert("Could not load Plugin");
	player1.EnablePlugin("Endscreen-Recommendations", {
		OnShowCallback: function(player) {
			console.log("Video ID is:", player.GetData('foobar-baz-videoid'));
			console.log("OnShowCallback triggered");
		},
		OnClickCallback: function(player, evt) {
			console.log("Video ID is:", player.GetData('foobar-baz-videoid'));
			console.log("OnClickCallback triggered");
		},
		OnBeforeNextVideo: function(player) {
			console.log("OnBeforeNextVideo triggered");
		}
	});
	player1.Finish();
});
```
## Demo Page

Here's a [demo html page](html/TOnlineMediaplayerFramework.LoadPlugin.html), with a [demo-script](html/TOnlineMediaplayerFramework.LoadPlugin.js).

