import React from 'react';
import Character from './Character';

const CharacterList = (props) =>{
  const charList = props.characters.map(character => {
    return <li key={character.id}>
      <Character
        name={character.name}
        description={character.description} />
      </li>
  })

  return (
    <div className="char-container">
    <ol className="char-list">{charList}
    </ol>
    </div>
  )
}

export default CharacterList;
