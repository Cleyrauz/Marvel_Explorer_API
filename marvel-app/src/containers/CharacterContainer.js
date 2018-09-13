import React, {Component} from 'react';
import CryptoJS  from 'crypto-js';
import CharacterList from '../components/CharacterList';

const PRIVATE_KEY = "e5ebb5751fbadc8b568517a79f2aa494e22f4357";
const PUBLIC_KEY = "e5de7dbf97acd76b7f887d6ab69a1075";
const API_BASE_URL = 'https://gateway.marvel.com/v1/public/';

class CharacterContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      characters:[]
    };

}

componentDidMount(){
    this.loadAPIFunction();
  }

  loadAPIFunction(characterName){
    let url_Empty_Name = API_BASE_URL + 'characters?nameStartsWith=Spider-man&' + this.getHash();
    let url_With_Name = API_BASE_URL + 'characters?nameStartsWith='+characterName+'&' + this.getHash();
    let url = characterName ? url_With_Name : url_Empty_Name;

    fetch(url)
    .then(responseText => responseText.json())
    .then(characters => this.setState({characters: characters.data.results}))
    .catch(err => console.log(err));
  };

// loadAPIFunction(characterName){
//       let url = characterName ? API_BASE_URL + 'characters?nameStartsWith=' + characterName + '&' + this.getHash() : API_BASE_URL + 'characters?nameStartsWith=Spider-man&' + this.getHash();
//       fetch(url)
//       .then(response => response.json())
//       .then(events => this.setState({events: events}))
//       .catch(err => console.log(err));
//     }

getHash() {
      let timestamp = new Date().getTime();
      let md5 = CryptoJS.MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString();
      return "ts=" + timestamp + "&apikey=" + PUBLIC_KEY + "&hash=" + md5;
    }

    render(){
   return(
     <React.Fragment>
       <CharacterList characters = {this.state.characters}/>
     </React.Fragment>
   )
 }

  }


export default CharacterContainer;
