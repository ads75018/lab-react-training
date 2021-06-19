import React from 'react';

function Random(props) {
  let randomValue = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <div>
      <p>
        random value between {props.min} and {props.max} => {randomValue}
      </p>
    </div>
  );
}

export default Random;
