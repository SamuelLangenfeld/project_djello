import React from "react";

const Card = props => {
  return (
    <div className="card" onClick={props.getCard}>
      {props.title}
    </div>
  );
};

export default Card;
