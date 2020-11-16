TOnlineMediaplayerFramework.Init();
// Initialize new player via call to .New()
const player1 = TOnlineMediaplayerFramework.New(
	document.getElementById("player-88299612")
);

// Translate the UI into german
player1.SetLanguage("de");
player1
	.SetTranslation(
		"AD: {{seconds}} seconds remaining",
		"Werbung endet in {{seconds}} Sekunden",
		"de"
	)
	.SetTranslation("Play", "Abspielen", "de")
	.SetTranslation("Pause", "Pause", "de")
	.SetTranslation("Settings", "Einstellungen", "de")
	.SetTranslation("Picture in Picture", "Bild im Bild", "de")
	.SetTranslation("Enter Fullscreen", "Vollbild", "de")
	.SetTranslation("Exit Fullscreen", "Kein Vollbild", "de")
	.SetTranslation("Replay", "Erneut abspielen", "de")
	.SetTranslation("Mute", "Ton aus", "de")
	.SetTranslation("Unmute", "Ton an", "de")
	.SetTranslation("Quality", "Qualität", "de")
	.SetTranslation("Speed", "Geschwindigkeit", "de");

player1.Finish();
