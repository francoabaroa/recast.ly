class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      done: false
    };
    console.log(this.state);
  }
  // constructor(props) {
  //   super(props);
  //   this.defaultProps = {
  //     state: {videoList: examples, currentVideo: examples[0], done: false}
  //   };
  //   console.log(this);
  // }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={exampleVideoData[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData}/>
        </div>
      </div>
    );
  }
}


// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={examples[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={examples}/>
//     </div>
//   </div>
// );


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
