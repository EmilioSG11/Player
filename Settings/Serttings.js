var player = videojs('emsgplayer1', {
  autoplay: '',
	controls: true,
  fill: true,
  fluid: true,
  subtitlesDisplay: false,
  liveui: true,
  language: 'es',
  preload: "auto",
  techOrder: ['html5', 'youtube'],
  html5: {
    vhs: {
      enableLowInitialPlaylist: true,
      fastQualityChange: true,
      overrideNative: true,
      useDevicePixelRatio: true,
   },
    youtube:{
      playlist: '2_HXUhShhmY,lLJf9qJHR3E'
},  
  },  
 plugins: {   
 },
});


/*---Quality Selector Plugin---*/
player.hlsQualitySelector ({
  sortAscending: false,
autoPlacement: 'bottom',
   getCurrentQuality: '720p'
});

player.getChild('controlBar').addChild('QualitySelector', {}, 15)

/*---Poster Time Plugins---*/
player.posterTime ({
  poster: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==',
      align: 'top-right'});


 /*---Title Overlay Plugin---*/
    player.titleOverlay({
      title:document.title}); 

/*---Logo Plugin---*/
player.logo ({
    image: 'https://raw.githubusercontent.com/EmilioSG11/page/main/logoplayer.svg',
    fadeDelay: null,
    hideOnReady: false,
    url: 'https://www.twitter.com',
    position: 'top-right',
    width: 50,
    opacity: 0.9,
    offsetV : 0
});
