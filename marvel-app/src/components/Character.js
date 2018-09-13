import React from 'react';
import {Link} from 'react-router';

const Character = (props) => {
  if(!props.character){
    return null;
  }
  return (<React.Fragment>
           <p><Link to={'/character/'+props.character.id}>{props.character.name}</Link></p>
           <img src={props.character.thumbnail.path +"."+props.character.thumbnail.extension} className = "image" alt="Character image"
           width="300" height="400"/>
        </React.Fragment>
        )
}

export default Character;
