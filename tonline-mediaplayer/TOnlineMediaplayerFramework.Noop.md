# TOnlineMediaplayerFramework.Noop()

This is just an empty function.

This can be used, instead of manually creating empty functions which bloats the source-code.

It's analogous to [jQuery's](https://api.jquery.com/jQuery.noop/) `$.noop()` function.

**Example:**

```javascript
const ExamplePluginFunction(opts) {
	opts = opts || {};
	// Use the passed callback function or an empty one.
	opts.callback = opts.callback || TOnlineMediaplayerFramework.Noop;
	const a = document.createElement("a");
	a.innerHTML = "Demo Testlink";
	a.addEventListener("click", opts.callback);
	document.body.appendChild(a);
}
```

