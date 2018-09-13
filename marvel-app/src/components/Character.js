import React from 'react';

const Character = (props) => {
  if(!props.name){
    return null;
  }
  return (<React.Fragment>
           <p>Name: {props.name}</p>
           <p>Bio: {props.description}</p>
        </React.Fragment>
        )
}

export default Character;
