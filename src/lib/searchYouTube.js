var searchYouTube = ({key, query, max = 6}, callback) => 
  $.get('https://www.googleapis.com/youtube/v3/search', {
    maxResults: max, 
    videoEmbeddable: true, 
    q: query, 
    key: key, 
    part: 'snippet',
    type: 'video',
  }).done(({items}) => callback === undefined ? items : callback(items))
    .fail(x => console.log ('youtube search request failed: ', x));
  


window.searchYouTube = searchYouTube;
