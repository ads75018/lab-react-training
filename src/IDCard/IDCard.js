import React from 'react';

function IDCard(props) {
  return (
    <div>
      <p>{props.firstName}</p>

      <p>{props.lasttName}</p>

      <p>{props.gender}</p>

      <p>{props.birth.toDateString()}</p>

      <img src={props.picture} />
    </div>
  );
}

export default IDCard;
