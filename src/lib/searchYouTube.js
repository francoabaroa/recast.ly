var searchYouTube = (options, callback) => {
  return $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {limit: options.max},
    success: (x) => callback === undefined ? x : callback(x),
    error: () => console.log('youtube search request failed')
  });
};

window.searchYouTube = searchYouTube;
