# TOnlineMediaplayerFramework.New()

Works on DOM nodes and creates TOnlineMediaplayer instance.

This method is important if you plan to create players dynamically with JavaScript.

The `New()` method yields a `.Finish()` method,
which has to be called, after you're done setting up the player.

```javascript
var domNode = document.getElementById("player1");
var player1 = TOnlineMediaplayerFramework.New(domNode);
// Translate the player's UI into german
player1.SetLanguage("de");
player1.SetTranslation(
	"AD: {% raw %}{{seconds}}{% endraw %} seconds remaining",
	"Werbung endet in {% raw %}{{seconds}}{% endraw %} Sekunden",
	"de"
)
.SetTranslation("Play", "Abspielen", "de")
// We're done setting up the player
player1.Finish();
```


## Example

The player won't get automatically initialized, because of the `data-programmatic` attribute.

See the [getting started guide](getting-started.md) for more information on that.

```html
<html lang="en">
<head></head>
<body>
<script src="https://tonline-mediaplayer.github.io/assets/js/tonline-mediaplayer.js"></script>
<link rel="stylesheet" href="https://tonline-mediaplayer.github.io/assets/css/tonline-mediaplayer.css">
<div id="player1"
	class="tonline-mediaplayer"
	data-programmatic>
	<div class="containment">
		<video
			playsinline
			poster="https://tonline-mediaplayer.github.io/assets/images/html-examples/poster.jpg"
			preload="metadata"
			data-clicktarget="video">
			<source
				data-quality="1080"
				data-label="1080p"
				src="https://tonline-mediaplayer.github.io/assets/videos/html-examples/sample-video-1080p.mp4"
				type="video/mp4">
			<source
				data-quality="720"
				data-label="720p"
				src="https://tonline-mediaplayer.github.io/assets/videos/html-examples/sample-video-720p.mp4"
				type="video/mp4">
			<source
				data-quality="240"
				data-label="240p"
				src="https://tonline-mediaplayer.github.io/assets/videos/html-examples/sample-video-240p.mp4"
				type="video/mp4">
		</video>
	</div>
</div>
<script>
	// Init all Videoplayers on the website
	TOnlineMediaplayerFramework.Init();
	var domNode = document.getElementById("player1");
	var player1 = TOnlineMediaplayerFramework.New(domNode);

	// Translate the player's UI into german
	player1.SetLanguage("de");
	player1.SetTranslation(
	 "AD: {% raw %}{{seconds}}{% endraw %} seconds remaining",
	 "Werbung endet in {% raw %}{{seconds}}{% endraw %} Sekunden",
	 "de"
	)
	.SetTranslation("Play", "Abspielen", "de")
	.SetTranslation("Pause", "Pause", "de")
	.SetTranslation("Settings", "Einstellungen", "de")
	.SetTranslation(
		"Picture in Picture",
		"Bild im Bild",
		"de"
	)
	.SetTranslation("Enter Fullscreen", "Vollbild", "de")
	.SetTranslation(
		"Exit Fullscreen",
		"Kein Vollbild",
		"de"
	)
	.SetTranslation("Replay", "Erneut abspielen", "de")
	.SetTranslation("Mute", "Ton aus", "de")
	.SetTranslation("Unmute", "Ton an", "de")
	.SetTranslation("Quality", "Qualität", "de")
	.SetTranslation("Speed", "Geschwindigkeit", "de");

	// We're done setting up the player
	player1.Finish();
</script>
</body>
</html>
```



## Demo Page

Here's a [demo html page](html/TOnlineMediaplayerFramework.New.html), with a [demo-script](html/TOnlineMediaplayerFramework.New.js).

