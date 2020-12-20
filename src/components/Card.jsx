import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.imgURL} />
          {/* {Avatar(props.imgURL)} */}
        </div>
        <div className="bottom">
          <Details info={props.phone} />
          <Details info={props.email} />
        </div>
      </div>
    </div>
  );
}
export default card;
