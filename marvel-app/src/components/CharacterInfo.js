import React from 'react';
import Character from './Character';

const CharacterInfo = (props) => {
  if(!props.character){
    return null;
  }

  return (<React.Fragment>
           <div className="pic-container">
           <p>Name: {props.character.name}</p>
           <img src={props.character.thumbnail.path +"."+props.character.thumbnail.extension} className = "image" alt="Character image"
           width="150" height="200"/>
           </div>
             <div className="bio-container">
             {
              displayBio(props.character.description)
             }
           </div>
           <div className="charinfo-container">
            <h2> Comics </h2>
          </div>
           {
            displayComics(props.character.comics.items)
           }
           <div className="charinfo-container">
             <h2> Events </h2>
          </div>
           {
             displayEvents(props.character.events.items)
           }
        </React.Fragment>
        )
}

function displayBio(bio) {
  if(bio.length > 0) {
    return (bio)
  } else {
    return (
      <p> This character doesn't have bio. </p>
    )
  }
}

function displayComics(comics) {
  if(comics.length > 0) {
    return comics.map(function (comic) {
        return (
            <div className="row">
              <div className="col-md-1">
                <table>
                  <tbody>
                    <tr>
                      <th>{comic.name}</th>
                    </tr>
                  </tbody>
                  </table>
              </div>
            </div>
        )
    })
  } else {
    return (
    <p> This character doesn't have comics. </p>
   )
  }
}

function displayEvents(events) {
  if(events.length > 0) {
    return events.map(function (event) {
        return (
            <div className="row">
                <div className="col-md-1">
                  <table>
                    <tbody>
                      <tr>
                        <th>{event.name}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        )
      })
    } else {
      return (
        <p> This character doesn't have events. </p>
      )
    }
}

export default CharacterInfo;
