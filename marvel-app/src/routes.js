import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './App';
import CharacterContainer from './containers/CharacterContainer';
import CharacterByIdContainer from './containers/CharacterByIdContainer';


export default(
<Route path="/" component={App}>
    <IndexRoute component = {CharacterContainer} />
    <Route path="/:id" component = {CharacterByIdContainer}/>
</Route>
);
