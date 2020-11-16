# TOnlineMediaplayer.SetVASTPrerollTag(string url): TOnlineMediaplayer

Sets the player's VAST Preroll Ad-Tag via a string url and returns the `playerRef` to enable chaining.

If you don't know the ad-tag url,
e.g. because of adblockers,
you might set the tag to string `"true"`,
which then triggers a 301 ad-error.

**Example**

Forces a 301 ad-error

```javascript
playerRef.SetVASTPrerollTag("true");
```

Sets a regular VAST Preroll Ad-Tag

```javascript
playerRef.SetVASTPrerollTag("https://tracking.m6r.eu/win/vast?creativeLinkId=1ecb5cd6-0193-43c9-9a08-33734996142a&id=mbr-auction%3A1c9125bc-fcd0-4070-96e7-120a707ef2e8&adscalePrice=MmU0ZTRkMzliZDA1NDIxY3CEMqgkMpSY33yqyA&mbrUserId=682061574ec3888ffc91a48407b37e9&checkcookies=true&videoProtocol=7&z=")
```

