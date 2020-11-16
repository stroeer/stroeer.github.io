# TOnlineMediaplayerFramework.LoadCSS(): String

Loads a CSS file.

See [LoadPlugin()](TOnlineMediaplayerFramework.LoadPlugin.md) for a more complete example.

An example usage might look like this:

```javascript
document.getElementById("button1").addEventListener("click", function() {
	TOnlineMediaplayerFramework.LoadCSS("green.css");
}, function(err) {
	if (err) alert("Error loading CSS!");
	else alert("Loading complete!");
});
```
## Demo Page

Here's a [demo html page](html/TOnlineMediaplayerFramework.LoadCSS.html), with a [demo-script](html/TOnlineMediaplayerFramework.LoadCSS.js).

