import React from 'react';

const Character = (props) => {
  if(!props.name){
    return null;
  }
  return (<React.Fragment>
           <p>Name: {props.name}</p>
           <img src={props.image} className = "image" alt="Character image" width="300" height="400"/>
        </React.Fragment>
        )
}

export default Character;
