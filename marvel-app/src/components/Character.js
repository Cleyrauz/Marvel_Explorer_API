import React from 'react';
import {Link} from 'react-router';
import "./Character.css"

const Character = (props) => {
  if(!props.character){
    return null;
  }
  return (<React.Fragment>
    <div className="char-container">
           <p>{props.character.name}</p>
           <Link to={'/character/'+props.character.id}>
           <img src={props.character.thumbnail.path +"."+props.character.thumbnail.extension}
             className = "image" alt="Character image"
           width="300" height="400"/></Link>
    </div>
        </React.Fragment>
        )
}

export default Character;
