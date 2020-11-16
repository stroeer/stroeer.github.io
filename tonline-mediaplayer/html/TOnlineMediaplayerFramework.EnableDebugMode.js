// Init all Videoplayers on the website
TOnlineMediaplayerFramework.Init();

// Enforce debug mode OFF
TOnlineMediaplayerFramework.DisableDebugMode();

// This does not produce any logging, because debug mode has been disabled.
TOnlineMediaplayerFramework.Log()(
	"Log Example",
	{
		foo: true,
		bar: false
	},
	true,
	1
);

// Enforce debug mode ON
TOnlineMediaplayerFramework.EnableDebugMode();

// This does produce logging, because debug mode has been enabled.
TOnlineMediaplayerFramework.Log()(
	"Log Example",
	{
		foo: true,
		bar: false
	},
	true,
	1
);

// Disable debug mode again,
// so we won't cause any logging from here onwards
TOnlineMediaplayerFramework.DisableDebugMode();
