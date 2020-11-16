# TOnlineMediaplayerFramework.Log()

This is a wrapper for console.log which only yields output, if the debug mode is active (see: [TOnlineMediaplayerFramework.EnableDebugMode()](TOnlineMediaplayerFramework.EnableDebugMode).

It yields a colored title (`TOnlineMediaplayerFramework.Log("debug")("This is a title", {empty_o: false});`), except for IE11, where it falls back to a un-colored output, because IE11 can't  handle CSS-Styles in `console.log`.

It has five different convenient modes (the default one is info) which are simple color presets:

 - info
 - debug
 - warn
 - error
 - {custom}

The colors are only applied to the `title` string.

```javascript
const type = "info";
const title = "This is a colored title; for better readability";
const debug1 = "can be anything";
const debug2 = {an_object: "an object's value"};
const debug3 = true;
const debug4 = 1337;
TOnlineMediaplayerFramework.Log(type)(title, debug1, debug2, debug3, debug4);
```

## Info Log Example

This is a color preset. The colors are: `{bg: "#19cf85",fg: "#272b30"}`.

```javascript
TOnlineMediaplayerFramework.Log("info")("Info Log Example", {foo: true, bar: false}, true, 1);
```

Because `info` is the default mode, this can be simplified (by omitting the `type`) to:

```javascript
TOnlineMediaplayerFramework.Log()("Simplified Info Log Example", {foo: true, bar: false}, true, 1);
```

## Debug Log Example

This is a color preset. The colors are: `{bg: "#3c92d1",fg: "#272b30"}`.

```javascript
TOnlineMediaplayerFramework.Log("debug")("Debug Log Example", {foo: true, bar: false}, true, 1);
```

## Warn Log Example

This is a color preset. The colors are: `{bg: "#ffd866",fg: "#272b30"}`.

```javascript
TOnlineMediaplayerFramework.Log("warn")("Warn Log Example", {foo: true, bar: false}, true, 1);
```

## Error Log Example

This is a color preset. The colors are: `{bg: "#ff6188",fg: "#272b30"}`.

```javascript
TOnlineMediaplayerFramework.Log("error")("Error Log Example", {foo: true, bar: false}, true, 1);
```

## Custom Log Example

The mode can be utilized to use completely custom colors.

It expects an object with two keys `bg` and `fg`.  The values of both these keys have to be strings in a hexadecimal format. Both `#rgb` and `#rrggbb` are supported.

In fact all [Web-Colors (CSS-Colors)](https://en.wikipedia.org/wiki/Web_colors#CSS_colors) should work, but to be on the safer side, just stick to hexadecimal values.

```javascript
TOnlineMediaplayerFramework.Log({bg:"#9cf", fg: "#000"})("Custom Log Example", {foo: true, bar: false}, true, 1);
```

## Demo Page

Here's a [demo html page](html/TOnlineMediaplayerFramework.Log.html), with a [demo-script](html/TOnlineMediaplayerFramework.Log.js).

