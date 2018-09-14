import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
     return (
       <div>
         <NavBar/>
         <h3>MARVEL character explorer</h3>
        {this.props.children}
      </div>
     );
   }
}




export default App;
