# TOnlineMediaplayer.GetData(): String

Returns `data-` attribute values from the root videoplayer element (not the `video` tag).

An example usage might look like this:

```html
<button id="button1">Click me</button>

<div id="player-88299612"
	class="tonline-mediaplayer"
	data-foobar-baz-id="12345"
	data-programmatic>
	<div class="containment">
		<video
			playsinline
			poster="../assets/images/html-examples/poster.jpg"
			preload="metadata"
			data-clicktarget="video">
			<source
				data-quality="1080"
				data-label="1080p"
				src="../assets/videos/html-examples/sample-video-1080p.mp4"
				type="video/mp4">
			<source
				data-quality="720"
				data-label="720p"
				src="../assets/videos/html-examples/sample-video-720p.mp4"
				type="video/mp4">
			<source
				data-quality="240"
				data-label="240p"
				src="../assets/videos/html-examples/sample-video-240p.mp4"
				type="video/mp4">
		</video>
	</div>
</div>
```

```javascript
const player1 = TOnlineMediaplayerFramework.New(document.getElementById('player-88299612'));
player1.Finish();

document.getElementById("button1").addEventListener("click", function() {
	alert(player1.GetData("foobar-baz-id"));
});

```

## Demo Page

Here's a [demo html page](html/TOnlineVideoplayer.GetData.html), with a [demo-script](html/TOnlineVideoplayer.GetData.js).

