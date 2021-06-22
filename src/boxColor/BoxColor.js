import { BackgroundColor, rgb } from 'chalk';
import React from 'react';

const divStyle = {
  color: 'black',
  border: '1px solid black',

  width: '100px',
  marginBottom: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  // backgroundImage: 'url(' + imgUrl + ')',
};

const text = {
  color: 'white',
  backgroundColor: 'rgb({props.r},{props.g},{props.b})',
};

function BoxColor(props) {
    let hex = '#'
      + ('0'+props.r.toString(16)).substr(-2)
      + ('0'+props.g.toString(16)).substr(-2)
      + ('0'+props.b.toString(16)).substr(-2)
    let color = 'white'
    if (props.r+props.g+props.b > 127*3) color = 'black'

  return (
    <div style={divStyle}>
      <div style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}>
        <p>{props.r}</p>
        <p>{props.g}</p>
        <p>{props.b}</p>
        {hex}
      </div>
    </div>
  );
}

export default BoxColor;
