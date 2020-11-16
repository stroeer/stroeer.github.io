TOnlineMediaplayerFramework.Init();
// Initialize new player via call to .New()
const player1 = TOnlineMediaplayerFramework.New(
	document.getElementById("player-88299612")
);

player1.Finish();

// Start playing
// Pause the player after 2 seconds, when playback has started
player1.On("play", function() {
	setInterval(function() {
		player1.Pause();
	}, 2000);
});
