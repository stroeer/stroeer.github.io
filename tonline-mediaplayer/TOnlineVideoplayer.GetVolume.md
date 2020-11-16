# TOnlineMediaplayer.GetVolume()

Gets the player's volume as floating point number (between 0 and 1).

A full volume bar would equal return `1.0`,
whereas an empty volume bar would return `0.0`.

**Hint**:
A player can be `muted` (see [TOnlineMediaplayer.IsMuted(): bool](TOnlineMediaplayer.IsMuted.md)), but also have a volume of `1.0`.

