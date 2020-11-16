// Init all Videoplayers on the website
TOnlineMediaplayerFramework.Init();

// Create a counter to increment dymanically created player headlines
let dymanicallyCreatedPlayersIndex = 0;

// Creates the markup needed for the TOnlineMediaplayer
function CreateMarkup() {
	const container = document.createElement("div");
	container.className = "tonline-mediaplayer";

	const containment = document.createElement("div");
	containment.className = "containment";

	const video = document.createElement("video");
	video.setAttribute("playsinline", "");
	video.setAttribute("poster", CreatePosterImageDataURL());
	video.setAttribute("preload", "metadata");
	video.setAttribute("data-clicktarget", "video");

	const source1 = document.createElement("source");
	source1.setAttribute("data-quality", "1080");
	source1.setAttribute("data-label", "1080p");
	source1.setAttribute(
		"src",
		"../assets/videos/html-examples/sample-video-1080p.mp4"
	);
	source1.setAttribute("type", "video/mp4");

	const source2 = document.createElement("source");
	source2.setAttribute("data-quality", "720");
	source2.setAttribute("data-label", "720p");
	source2.setAttribute(
		"src",
		"../assets/videos/html-examples/sample-video-720p.mp4"
	);
	source2.setAttribute("type", "video/mp4");

	const source3 = document.createElement("source");
	source3.setAttribute("data-quality", "240");
	source3.setAttribute("data-label", "240p");
	source3.setAttribute(
		"src",
		"../assets/videos/html-examples/sample-video-240p.mp4"
	);
	source3.setAttribute("type", "video/mp4");

	video.appendChild(source1);
	video.appendChild(source2);
	video.appendChild(source3);

	containment.appendChild(video);
	container.appendChild(containment);

	return container;
}

const websiteDemoContent = document.getElementById("websiteDemoContent");
const createNewPlayerButton = document.getElementById("createNewPlayerButton");
const initializePlayerButton = document.getElementById(
	"initializePlayerButton"
);

createNewPlayerButton.addEventListener("click", function(evt) {
	evt.preventDefault();

	// Increment the counter
	dymanicallyCreatedPlayersIndex++;

	const header = document.createElement("h3");
	header.innerHTML = "Player #" + dymanicallyCreatedPlayersIndex;

	// Create Markup and append it to the website contents
	const playerNode = CreateMarkup();
	websiteDemoContent.appendChild(header);
	websiteDemoContent.appendChild(playerNode);

	// Initialize new player via call to .New()
	const player1 = TOnlineMediaplayerFramework.New(playerNode);

	// Finish setup of new player.
	// This is important, otherwise the player won't get fully initialized.
	// This is so you can configure the player further and when you're finished,
	// call finish like so:
	//
	// player1.SetVASTPrerollTag("https://tracking.m6r.eu/win/vast?creativeLinkId=1ecb5cd6-0193-43c9-9a08-33734996142a&id=mbr-auction%3A1c9125bc-fcd0-4070-96e7-120a707ef2e8&adscalePrice=MmU0ZTRkMzliZDA1NDIxY3CEMqgkMpSY33yqyA&mbrUserId=682061574ec3888ffc91a48407b37e9&checkcookies=true&videoProtocol=7&z=");
	// player1.Finish();
	player1.Finish();
});

initializePlayerButton.addEventListener("click", function(evt) {
	evt.preventDefault();

	// Remove this button
	this.parentNode.removeChild(this);

	// Get the DOM node of the existing player, that is not initialized.
	const node = document.getElementById("notInitializedPlayerByDefault");

	// Initialize new player via call to .New()
	const player1 = TOnlineMediaplayerFramework.New(node);

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

	// Finish setup of new player.
	// This is important, otherwise the player won't get fully initialized.
	// This is so you can configure the player further and when you're finished,
	// call finish like so:
	//
	// player1.SetVASTPrerollTag("https://tracking.m6r.eu/win/vast?creativeLinkId=1ecb5cd6-0193-43c9-9a08-33734996142a&id=mbr-auction%3A1c9125bc-fcd0-4070-96e7-120a707ef2e8&adscalePrice=MmU0ZTRkMzliZDA1NDIxY3CEMqgkMpSY33yqyA&mbrUserId=682061574ec3888ffc91a48407b37e9&checkcookies=true&videoProtocol=7&z=");
	// player1.Finish();
	player1.Finish();
});
