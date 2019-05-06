import React, { Component } from "react";
import Comments from "../container/Comments";

class CommentList extends Component {
  state = {
    commentContents: [
      {
        Name: "Micheal Lyons",
        Date: "12/18/2018",
        Comment: `They BLEW the ROOF off at their last show, 
      once everyone started figuring out they were going.
      This is still simply the greatest opening of a concert 
      I have EVER witnessed.`
      },

      {
        Name: "Gary Wong",
        Date: "12/18/2018",
        Comment: `Every time I see him shred I feel so 
      motivated to get off my couch and hop on my board.
      He’s so talented! I wish I can ride like him one day 
      so I can really enjoy myself!`
      },

      {
        Name: "Theodore Duncan",
        Date: "11/15/2018",
        Comment: `How can someone be so good!!! 
      You can tell he lives for this and loves 
      to do it every day. Every time I see him I feel 
      instantly happy! He’s definitely my favorite ever!`
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.commentContents.map(content => (
          <Comments
            Name={content.Name}
            Date={content.Date}
            Comment={content.Comment}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;
