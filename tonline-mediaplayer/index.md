# Documentation

Documentation for the T-Online Mediaplayer Framework.

See our [getting started](getting-started.md) guide on how to quickly get up and running.

## T-Online Mediaplayer Framework Methods

 - CreateEl
 - [Log(`string type | object colors`)(`string title, ...`): void](TOnlineMediaplayerFramework.Log.md)
 - [Noop(): void](TOnlineMediaplayerFramework.Noop.md)
 - [New(DOMNode node)](TOnlineMediaplayerFramework.New.md)
 - [LoadCSS(string url): void](TOnlineMediaplayerFramework.LoadCSS.md)
 - [LoadPlugin](TOnlineMediaplayerFramework.LoadPlugin.md)
 - RegisterPlugin
 - GetAllPlugins
 - GetPlugin
 - IsTouchDevice
 - GetAllPlayers
 - GetPlayerByIndex
 - [EnableDebugMode(): void](TOnlineMediaplayerFramework.EnableDebugMode.md)
 - [DisableDebugMode(): void](TOnlineMediaplayerFramework.DisableDebugMode.md)
 - Init

## TOnlineMediaplayer Methods

 - [GetPosterImage(): string](TOnlineVideoplayer.GetPosterImage.md)
 - [GetVolume(): float](TOnlineVideoplayer.GetVolume.md)
 - [SetVolume(float volume): TOnlineMediaplayer](TOnlineVideoplayer.SetVolume.md)
 - [GetBuffered(): array](TOnlineVideoplayer.GetBuffered.md)
 - [GetContainerEl()](TOnlineVideoplayer.GetContainerEl.md)
 - [SetVASTPrerollTag(string url): TOnlineMediaplayer](TOnlineVideoplayer.SetVASTPrerollTag.md)
 - [GetVASTPrerollTag(): string](TOnlineVideoplayer.GetVASTPrerollTag.md)
 - [IsInLandscapeMode(): boolean](TOnlineVideoplayer.IsInLandscapeMode.md)
 - [IsInPortraitMode(): boolean](TOnlineVideoplayer.IsInPortraitMode.md)
 - IsClickToPlay()
 - ConvertSecondsIntoPlayerDisplayFormat()
 - GetViewportDimensions()
 - [EnablePlugin()](TOnlineVideoplayer.EnablePlugin.md)
 - GetLanguage()
 - [SetLanguage(string languageCode): TOnlineVideoplayer](TOnlineVideoplayer.SetLanguage.md)
 - [SetTranslation(string key, string value, string languageCode)](TOnlineVideoplayer.SetTranslation.md)
 - GetTranslation(string)
 - GetOriginalVideoSource()
 - SetOriginalVideoSource
 - GetOriginalVideoSources
 - SetOriginalVideoSources
 - GetVideoSource
 - SetVideoSource
 - [GetCurrentTime(): Number](TOnlineVideoplayer.GetCurrentTime.md)
 - SetCurrentTime
 - IsFirstStart
 - [On(string eventName, function cb): TOnlineMediaplayer](TOnlineVideoplayer.On.md)
 - Off
 - GetEventListenersByName
 - GetAllEventListeners
 - IsInFullScreenMode
 - IsPlayingAd
 - ExitFullScreen
 - ToggleFullscreen
 - GetEl
 - GetVideoEl
 - GetControlsEl
 - IsMuted
 - IsPaused
 - ShowBottomControls
 - HideBottomControls
 - IsBottomControlsMinified
 - ToggleBottomControls
 - GetPosterImageContainerEl
 - ShowPosterImage
 - HidePosterImage
 - GetWidth
 - GetHeight
 - SetDefaultPlaybackRate
 - SetDefaultPlaybackRateForAds
 - Play
 - Replay
 - [IsPlaying(): Boolean](TOnlineVideoplayer.IsPlaying.md)
 - AdIsPlaying
 - IsAdType
 - GetTimeContainerEl
 - GetAdsRemainingTimeContainerEl
 - ShowAdIsPlaying
 - HideAdIsPlaying
 - ToggleAdIsPlaying
 - CleanClickjackingOverlay
 - GetLoadingSpinner
 - PictureInPictureAllowed
 - IsInPictureInPictureMode
 - TogglePictureInPictureMode
 - EnterPictureInPictureMode
 - ExitPictureInPictureMode
 - ShowLoadingSpinner
 - HideLoadingSpinner
 - GetClickjackingOverlayEl
 - GetSelectedVideoSource
 - [GetData(): String](TOnlineVideoplayer.GetData.md)
 - IsHoverPreviewEnabled
 - GetControlBar
 - GetControlBarButton
 - HideControlBarButton
 - ShowControlBarButton
 - ToggleControlBarButton
 - [Pause](TOnlineVideoplayer.Pause.md)
 - Stop
 - SetSelectedMediaSource
 - GetSelectedMediaSource
 - AddMediaSource
 - ToggleCaptions
 - RemoveMediaSourceByURL
 - ShowOptionsBox
 - HideOptionsBox
 - ToggleOptionsBox

