TOnlineMediaplayerFramework.Init();
// Initialize new player via call to .New()
const player1 = TOnlineMediaplayerFramework.New(
	document.getElementById("player-88299612")
);

player1.Finish();

document.getElementById("button1").addEventListener("click", function() {
	alert(player1.GetData("foobar-baz-id"));
});

