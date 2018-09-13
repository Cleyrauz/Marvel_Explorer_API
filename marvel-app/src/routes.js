import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './App';
import CharacterContainer from './containers/CharacterContainer';
import CharacterByIdContainer from './containers/CharacterByIdContainer';
import Contact from './components/Contact';


export default(
<Route path="/" component={App}>
    <IndexRoute component = {CharacterContainer} />
    <Route path="/character/:id" component = {CharacterByIdContainer}/>
    <Route path="/contact" component = {Contact}/>
</Route>
);
