// Initialize new player via call to .New()
const player1 = TOnlineMediaplayerFramework.New(
	document.getElementById("player-88299612")
);

player1.Finish();

const trackingFunction = function(evt, tonlineVideoplayer, eventName) {
	console.log("Event is: ", evt);
	console.log("Name of the event is: ", eventName);
	console.log("TOnlineVideoplayer is: ", tonlineVideoplayer);
};

// A single event
player1.On("play", trackingFunction);

// Multiple events

// either like this:

player1.On("pause", trackingFunction).On("mute", trackingFunction);

// or like this:

player1.On("unmute, ended", trackingFunction);
