
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

/*---Playlist---*/
player.playlist([{

  name: 'Disney\'s Oceans 1',

      description: 'jnddndndndd',

      duration: 45,

	sources: [{

    src: 'https://dl.dropboxusercontent.com/s/iljisft39d22a5y/y2mate.com - Lifehouse   Hanging By A Moment  subtitulado español_v720P.mp4',

    type: ''

  }],

  thumbnail: [

        {srcset: '',

          type: 'image/jpeg',

          media: '(min-width: 50px;)'},

       {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqX84uz6hCKzZE8n2G9J7u5FD1nllUQaxGjw&usqp=CAU'}]

    }, 

                 

  {name: 'Disney\'s Oceans 1',

      description: 'jnddndndndd',

  sources: [{

    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',

    type: 'video/mp4'

  }],

  thumbnail: [

        {srcset: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqX84uz6hCKzZE8n2G9J7u5FD1nllUQaxGjw&usqp=CAU',

          type: 'image/jpeg',

          media: '(min-width: 450px;height: 1px;)'},

       {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqX84uz6hCKzZE8n2G9J7u5FD1nllUQaxGjw&usqp=CAU'}]

    }, 

   {

  sources: [{

    src: 'http://vjs.zencdn.net/v/oceans.mp4',

    type: 'video/mp4'

  }],

  poster: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Skyline_de_Monterrey.jpg'

}, {

  sources: [{

    src: 'http://media.w3.org/2010/05/bunny/movie.mp4',

    type: 'video/mp4'

  }],

  poster: 'http://media.w3.org/2010/05/bunny/poster.png'

}, {

  sources: [{

    src: 'http://media.w3.org/2010/05/video/movie_300.mp4',

    type: 'video/mp4'

  }],

  poster: 'http://media.w3.org/2010/05/video/poster.png'

}]);

// Play through the playlist automatically.

player.playlist.autoadvance(3);

