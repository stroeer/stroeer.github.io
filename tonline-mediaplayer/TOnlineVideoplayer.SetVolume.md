# TOnlineMediaplayer.SetVolume(float volume): TOnlineMediaplayer

Sets the player's volume via a floating point number (between 0 and 1) and returns the `playerRef` to enable chaining.

A full volume bar would equal return `1.0`,
whereas an empty volume bar would return `0.0`.

**Example**

Set the volume to 56%

```javascript
playerRef.SetVolume(0.56);
```

**Hint**:
A player can be `muted` (see [TOnlineMediaplayer.IsMuted(): bool](TOnlineMediaplayer.IsMuted.md)), but also have a volume of `1.0`.

