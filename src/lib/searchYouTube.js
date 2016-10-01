var searchYouTube = (options, callback) => {
  return $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {maxResults: options.max, q: options.query, access_token: options.key, part: 'snippet'},
    success: (x) => callback === undefined ? x : callback(x),
    error: (x) => console.log('youtube search request failed: ', x)
  });
};

console.log(searchYouTube({max: 5, query: 'test', key: window.YOUTUBE_API_KEY}, function () {
  console.log('success');
}));


window.searchYouTube = searchYouTube;


// var request = gapi.client.youtube.search.list({
//     q: q,
//     part: 'snippet'
//   });