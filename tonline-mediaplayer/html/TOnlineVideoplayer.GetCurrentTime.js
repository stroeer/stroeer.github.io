TOnlineMediaplayerFramework.Init();
// Initialize new player via call to .New()
const player1 = TOnlineMediaplayerFramework.New(
	document.getElementById("player-88299612")
);

player1.Finish();

player1.GetVideoEl().addEventListener("timeupdate", function() {
	console.log(player1.GetCurrentTime());
});

