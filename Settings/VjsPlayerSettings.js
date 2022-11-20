var player = videojs('emsgplayer1', {
	autoplay: '',
	controls: true,  
  liveui: true,
  fluid: true,
  preload: 'auto',  
	loop: false,
	playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
  html5:
  {
    vhs: {
    enableLowInitialPlaylist: false,
      fastQualityChange: true,
      useBandwidthFromLocalStorage: true,
      overrideNative: true,
      useDevicePixelRatio: true,
      useNetworkInformationApi: true,      
    }
  },
poster:'https://i.ibb.co/N6NKwht/wallpaperflare-com-wallpaper-2.jpg',
  plugins: {    
	}
});

var player = videojs('emsgplayer1', player);
  //player.play();
var player = videojs('emsgplayer1');
  player.qualityLevels();
let toggleQuality = (function() {
  let enable720 = true;
  return function() {
    for (var i = 0; i < qualityLevels.length; i++) {
      let qualityLevel = qualityLevels[i];
      if (qualityLevel.height >= 720) {
        qualityLevel.enabled = enable720;
      } else {
        qualityLevel.enabled = !enable720;
      }
    }
    enable720 = !enable720;
  };
})();
