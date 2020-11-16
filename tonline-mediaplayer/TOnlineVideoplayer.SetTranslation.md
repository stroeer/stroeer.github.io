# TOnlineMediaplayer.SetTranslation(string key, string value, string languageCode): TOnlineMediaplayer

Used to translate the player's UI elements.

An example translation of the full UI into german looks like this:

```javascript
const player1 = TOnlineMediaplayerFramework.New(document.getElementById('player-88299612'));

player1.SetLanguage("de")
	.SetTranslation(
		"AD: {{seconds}} seconds remaining",
		"Werbung endet in {{seconds}} Sekunden",
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

player1.Finish();
```

## Demo Page

Here's a [demo html page](html/TOnlineVideoplayer.SetTranslation.html), with a [demo-script](html/TOnlineVideoplayer.SetTranslation.js).

