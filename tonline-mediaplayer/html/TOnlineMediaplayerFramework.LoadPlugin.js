// Initialize new player via call to .New()
const player1 = TOnlineMediaplayerFramework.New(
	document.getElementById("player-88299612")
);

TOnlineMediaplayerFramework.LoadCSS(
	"../assets/css/tonline-mediaplayer-plugin-endscreen-recommendations.min.css",
	function(err) {
		if (err) return alert("Could not load CSS");
	}
);

TOnlineMediaplayerFramework.LoadPlugin(
	"../assets/js/tonline-mediaplayer-plugin-endscreen-recommendations.min.js",
	function(err) {
		if (err) return alert("Could not load Plugin");
		player1.EnablePlugin("Endscreen-Recommendations", {
			OnShowCallback: function(player) {
				console.log("Video ID is:", player.GetData("foobar-baz-videoid"));
				console.log("OnShowCallback triggered");
			},
			OnClickCallback: function(player, evt) {
				console.log("Event is: ", evt);
				console.log("Video ID is:", player.GetData("foobar-baz-videoid"));
				console.log("OnClickCallback triggered");
			},
			OnBeforeNextVideo: function(player) {
				console.log("Video ID is:", player.GetData("foobar-baz-videoid"));
				console.log("OnBeforeNextVideo triggered");
			}
		});
		player1.Finish();
	}
);
