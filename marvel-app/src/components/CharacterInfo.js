import React from 'react';
import Character from './Character';

const CharacterInfo = (props) => {
  if(!props.character){
    return null;
  }

  return (<React.Fragment>
           <p>Name: {props.character.name}</p>
           <img src={props.character.thumbnail.path +"."+props.character.thumbnail.extension} className = "image" alt="Character image"
           width="300" height="400"/>
           <p>Bio: {props.character.description}</p>
           <p>Top 20 comics </p>
           {
             displayComics(props.character.comics.items)
           }
           <p> Events </p>
           {
             displayEvents(props.character.events.items)
           }
        </React.Fragment>
        )
}

function displayComics(comics) {
    return comics.map(function (comic) {
        return (
            <div className="row">
                <div className="col-md-1">
                    {comic.name}
                </div>
            </div>
        )
    })
}

function displayEvents(events) {
    return events.map(function (event) {
        return (
            <div className="row">
                <div className="col-md-1">
                    {event.name}
                </div>
            </div>
        )
    })
}


export default CharacterInfo;
