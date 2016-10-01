class App extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoClick = this.onVideoClick.bind(this);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      done: false
    };
    console.log(this.color);
  }

  //add clickhandlerfunction here
    //make sure to bind this correctly
  

  onVideoClick(data) {
    console.log(this, data);
    var index = 0;
    exampleVideoData.forEach((x, i) => {
      if (x.etag === data) {
        index = i;
      }
    });
    this.setState({
      done: !this.state.done,
      currentVideo: exampleVideoData[index]
    });
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer {...this.props} {...this.state} video={this.state.currentVideo} onClick={this.onVideoClick}/>
        </div>
        <div className="col-md-5">
          <VideoList {...this.state} {...this.props} videos={exampleVideoData} onClick={this.onVideoClick}/>
        </div>
      </div>
    );
  }

  handleClick() {
    console.log(this);
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
