document.getElementById("button1").addEventListener("click", function() {
	TOnlineMediaplayerFramework.LoadCSS(
		"TOnlineMediaplayerFramework.LoadCSS.css",
		function(err) {
			if (err) alert("Error loading CSS!");
			else alert("Loading complete!");
		}
	);
});

