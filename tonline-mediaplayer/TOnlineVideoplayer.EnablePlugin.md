# TOnlineMediaplayer.EnablePlugin()

Enables a plugin for a specific player instance.

See [LoadPlugin()](TOnlineMediaplayerFramework.LoadPlugin.md) for a more complete example.

An example usage might look like this:

```javascript
const player1 = TOnlineMediaplayerFramework.New(document.getElementById('player-88299612'));
player1.EnablePlugin("Endscreen-Recommendations", {});
player1.Finish();
```

