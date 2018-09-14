import React from 'react';
import Character from './Character';

const CharacterInfo = (props) => {
  if(!props.character){
    return null;
  }

  return (<React.Fragment>
           <p>Name: {props.character.name}</p>
           <img src={props.character.thumbnail.path +"."+props.character.thumbnail.extension} className = "image" alt="Character image"
           width="150" height="200"/>
           <div className="bio-container">
           <p>Bio: {props.character.description}</p>
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

function displayComics(comics) {
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
}

function displayEvents(events) {
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
}


export default CharacterInfo;
