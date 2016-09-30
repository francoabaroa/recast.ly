// TODO: Render the `App` component to the DOM
var filterVideoData = (arr) => arr.map((x) => { return {title: x.snippet.title, description: x.snippet.description, icon: x.snippet.thumbnails.default.url, url: 'https://www.youtube.com/embed/' + x.id.videoId }; } );

window.examples = filterVideoData(exampleVideoData);
console.log(examples);
ReactDOM.render(<App />, document.getElementById('app'));

