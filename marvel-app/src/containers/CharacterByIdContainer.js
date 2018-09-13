import React, {Component} from 'react';
import CryptoJS  from 'crypto-js';

class CharacterByIdContainer extends Component{

    constructor(props){
      super(props)
    if(props.params.id){ //from the path 'course/:id')        
      console.log("Getting Character ID"+props.params.id);
    }  
     
  }

  render(){
    return(
     <p> Character Info </p>
    )
  }
 
 };
 
 export default CharacterByIdContainer;

