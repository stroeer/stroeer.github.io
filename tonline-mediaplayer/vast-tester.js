// Init all Videoplayers on the website
TOnlineMediaplayerFramework.Init();

document.getElementById("vasturl").addEventListener("keyup", function() {
	const url = this.value;
	TOnlineMediaplayerFramework.GetAllPlayers()[0].SetVASTPrerollTag(url);
});
