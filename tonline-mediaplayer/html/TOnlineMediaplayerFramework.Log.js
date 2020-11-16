// Init all Videoplayers on the website
TOnlineMediaplayerFramework.Init();

(function() {
	const type = "info";
	const title = "This is a colored title; for better readability";
	const debug1 = "can be anything";
	const debug2 = { an_object: "an object's value" };
	const debug3 = true;
	const debug4 = 1337;
	TOnlineMediaplayerFramework.Log(type)(title, debug1, debug2, debug3, debug4);
})();

// Info Log Example

TOnlineMediaplayerFramework.Log("info")(
	"Info Log Example",
	{
		foo: true,
		bar: false
	},
	true,
	1
);

// .. because info is the default type, it can be simplified (by omitting the type) to:
TOnlineMediaplayerFramework.Log()(
	"Simplified Info Log Example",
	{
		foo: true,
		bar: false
	},
	true,
	1
);

// Debug Log Example

TOnlineMediaplayerFramework.Log("debug")(
	"Debug Log Example",
	{
		foo: true,
		bar: false
	},
	true,
	1
);

// Warn Log Example

TOnlineMediaplayerFramework.Log("warn")(
	"Warn Log Example",
	{
		foo: true,
		bar: false
	},
	true,
	1
);

// Error Log Example

TOnlineMediaplayerFramework.Log("error")(
	"Error Log Example",
	{
		foo: true,
		bar: false
	},
	true,
	1
);

// Custom Log Example

TOnlineMediaplayerFramework.Log({
	bg: "#9cf",
	fg: "#000"
})(
	"Custom Log Example",
	{
		foo: true,
		bar: false
	},
	true,
	1
);
