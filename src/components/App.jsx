class App extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  
  componentDidMount() {
    this.formSubmit('rock roll');
  }

  formSubmit(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => 
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      })
    );
    // var searchInput = $('.form-control').val();
    // var result = searchYouTube({key: YOUTUBE_API_KEY, q: searchInput, max: 7}); 
    // console.log('app search', result);
  }

  onVideoListEntryClick(video) {
    // console.log(this, data);
    // var index = 0;
    // exampleVideoData.forEach((x, i) => {
    //   if (x.etag === data) {
    //     index = i;
    //   }
    // });
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav onSearchChange={this.formSubmit}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onVideoListEntryClick={this.onVideoListEntryClick}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
