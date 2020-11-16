# TOnlineMediaplayerFramework.DisableDebugMode()

It disables the logging via [TOnlineMediaplayerFramework.Log()](TOnlineMediaplayerFramework.Log.md).

The default mode is _off_.

It persists between sessions (per domain), because it deletes a key in `localStorage`.
This means, that once you deactivated the debug mode, it will keep being deactivated,
until you forcefully activate it via [TOnlineMediaplayerFramework.EnableDebugMode()](TOnlineMediaplayerFramework.EnableDebugMode.md).

[TOnlineMediaplayerFramework.Log()](TOnlineMediaplayerFramework.Log.md) only yields output,
if debug mode has been activated via `TOnlineMediaplayerFramework.EnableDebugMode()`.

If this mode is activated, the player itself will produce very verbose log messages.
It can be very handy, if you're trying to debug ads or general player functionality.

## Basic examples

This will **not** produce output, because debug mode has been deactivated.

```javascript
TOnlineMediaplayerFramework.DisableDebugMode();
TOnlineMediaplayerFramework.Log()("Log Example", {foo: true, bar: false}, true, 1);
```

This will produce output, because debug mode has been activated.

```javascript
TOnlineMediaplayerFramework.EnableDebugMode();
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

Here's a [demo html page](html/TOnlineMediaplayerFramework.DisableDebugMode.html), with a [demo-script](html/TOnlineMediaplayerFramework.DisableDebugMode.js).

