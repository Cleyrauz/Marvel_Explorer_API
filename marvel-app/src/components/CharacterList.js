import React from 'react';
import Character from './Character';

const CharacterList = (props) =>{
  const charList = props.characters.map(character => {
    return <li key={character.id}>
      <Character
        character={character} />
      </li>
  })

  return (
    <div className="charlist-container">
    <ol className="char-list">{charList}
    </ol>
    </div>
  )
}

export default CharacterList;
