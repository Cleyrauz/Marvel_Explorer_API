import React, {Component} from 'react';
import CryptoJS  from 'crypto-js';
import CharacterInfo from '../components/CharacterInfo';

const PRIVATE_KEY = "e5ebb5751fbadc8b568517a79f2aa494e22f4357";
const PUBLIC_KEY = "e5de7dbf97acd76b7f887d6ab69a1075";
const API_BASE_URL = 'https://gateway.marvel.com/v1/public/';

class CharacterByIdContainer extends Component{

    constructor(props){
      super(props)
      this.state = {
        character:[]
      };
      let id = props.params.id;
    if(id){
      this.loadAPIFunction(id);
    }
  };

  loadAPIFunction(id){
    console.log("Calling API");
    let url = API_BASE_URL + 'characters/' + id + '?' + this.getHash();
    console.log(url);
    fetch(url)
    .then(responseText => responseText.json())
    .then(characters => this.setState({character: characters.data.results}))
    .catch(err => console.log(err));
  };

getHash() {
      let timestamp = new Date().getTime();
      let md5 = CryptoJS.MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString();
      return "ts=" + timestamp + "&apikey=" + PUBLIC_KEY + "&hash=" + md5;
    };

  render(){
    return(
      <React.Fragment>
     <p> Character Information </p>
     <CharacterInfo character={this.state.character[0]} />
   </React.Fragment>
    )
  }

 };

 export default CharacterByIdContainer;
