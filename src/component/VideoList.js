import React, { Component } from "react";
import Videos from "../container/Videos";
import Video1 from "../Assets/Images/video-list-1.jpg";
import Video2 from "../Assets/Images/video-list-2.jpg";
import Video3 from "../Assets/Images/video-list-3.jpg";
import Video4 from "../Assets/Images/video-list-4.jpg";
import Video5 from "../Assets/Images/video-list-5.jpg";
import Video6 from "../Assets/Images/video-list-6.jpg";
import Video7 from "../Assets/Images/video-list-7.jpg";
import Video8 from "../Assets/Images/video-list-8.jpg";

class VideoList extends Component {
  state = {
    videoContents: [
      {
        id: "",
        title: "Become A Travel Pro In One Easy Lesson...",
        channel: "Scotty Cranmer",
        image: Video1
      },
      {
        id: "",
        title: "Les Houches The Hidden Gem Of The...",
        channel: "Scotty Cranmer",
        image: Video2
      },
      {
        id: "",
        title: "Travel Health Useful Medical Information...",
        channel: "Scotty Cranmer",
        image: Video3
      },
      {
        id: "",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: Video4
      },
      {
        id: "",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: Video5
      },
      {
        id: "",
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: Video6
      },
      {
        id: "",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: Video7
      },
      {
        id: "",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: Video8
      }
    ]
  };

  render() {
    return (
      <div className="videos">
        <div className="videos__next">NEXT VIDEO</div>
        {this.state.videoContents.map(content => (
          <Videos
            title={content.title}
            channel={content.channel}
            image={content.image}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
