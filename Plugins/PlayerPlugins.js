/*VIDEOJS Plugins*/
/*---Title Overlay Plugin---*/
player.titleOverlay({title:"VIP PLAYER "});


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


/*---Overlay Buttons Plugin---*/
player.touchOverlay ({
    seekLeft: {},
    play: {},
          seekRight: {},      
          lockButton: {}
});


/*---Poster Time Plugins---*/
player.posterTime ({
  poster: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==',
      align: 'top-right'});


/*---Quality Selector Plugin---*/
player.hlsQualitySelector ({
  sortAscending: false,
autoPlacement: 'bottom',
   getCurrentQuality: '720p'
});

player.getChild('controlBar').addChild('QualitySelector', {}, 15);
         
