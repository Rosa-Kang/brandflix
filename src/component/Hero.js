import React, { Component } from "react";
// import Views from "../Assets/Icons/SVG/Icon-views.svg";
// import Likes from "../Assets/Icons/SVG/Icon-likes.svg";
// import Play from "../Assets/Icons/SVG/Icon-play.svg";
// import Fullscreen from "../Assets/Icons/SVG/Icon-fullscreen.svg";
// import Volume from "../Assets/Icons/SVG/Icon-volume.svg";

class Hero extends Component {
  state = {
    mainVideo: {
      id: "",
      title: "BMX Rampage: 2018 Highlights",
      description: "",
      channel: "By Red Cow",
      image: "",
      views: "1,001,023",
      likes: "110,985",
      duration: "",
      video: "",
      timestamp: "",
      comments: `On a gusty day in Southern Utah, a group of 25 daring mountain 
        bikers blew the doors off what is possible on two wheels, unleashing 
        some of the biggest moments the sport has ever seen.While mother nature 
        only allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red
        Cow Rampage title`
    }
  };
  render() {
    return (
      <section className="hero">
        <div id="bike">
          <video
            className="hero__video"
            poster="./Assets/Images/video-list-0.jpg"
            controls
          />
        </div>
        {/* <div className="hero__play">
          <img id="play" src={Play} />
          <div className="hero__play--scroll">
            <hr /> <p>0:00 / 0:42</p>
          </div>
          <div className="hero__play--stuffs">
            <img id="fullscreen" src={Fullscreen} />
            <img id="volume" src={Volume} />
          </div>
        </div> */}
      </section>
    );
  }
}

export default Hero;
