# TOnlineMediaplayerFramework.EnableDebugMode()

It enables the logging via [TOnlineMediaplayerFramework.Log()](TOnlineMediaplayerFramework.Log.md).

It persists between sessions (per domain), because it sets a value via `localStorage`.
This means, that once you activated the debug mode, it will keep being activated,
until you forcefully deactivate it via [TOnlineMediaplayerFramework.DisableDebugMode()](TOnlineMediaplayerFramework.DisableDebugMode.md).

[TOnlineMediaplayerFramework.Log()](TOnlineMediaplayerFramework.Log.md) only yields output,
if debug mode has been activated via `TOnlineMediaplayerFramework.EnableDebugMode()`.

If this mode is activated, the player itself will produce very verbose log messages.
It can be very handy, if you're trying to debug ads or general player functionality.

## Basic examples

This will produce output, because debug mode has been activated.

```javascript
TOnlineMediaplayerFramework.EnableDebugMode();
TOnlineMediaplayerFramework.Log()("Log Example", {foo: true, bar: false}, true, 1);
```

This will **not** produce output, because debug mode has not been activated.

**Hint/Disclaimer:** If you enabled debug mode before, it will in fact produce output,
because the debug mode activation persists between sessions.

```javascript
TOnlineMediaplayerFramework.Log()("Log Example", {foo: true, bar: false}, true, 1);
```

## Advanced example

```javascript
// Enforce debug mode OFF
TOnlineMediaplayerFramework.DisableDebugMode();
// This does not produce any logging, because debug mode has been disabled.
TOnlineMediaplayerFramework.Log()("Log Example", {foo: true, bar: false}, true, 1);
// Enforce debug mode ON
TOnlineMediaplayerFramework.EnableDebugMode();
// This does produce logging, because debug mode has been enabled.
TOnlineMediaplayerFramework.Log()("Log Example", {foo: true, bar: false}, true, 1);
// Disable debug mode again, so we won't cause any logging from here onwards
TOnlineMediaplayerFramework.DisableDebugMode();
```

## Demo Page

Here's a [demo html page](html/TOnlineMediaplayerFramework.EnableDebugMode.html), with a [demo-script](html/TOnlineMediaplayerFramework.EnableDebugMode.js).

