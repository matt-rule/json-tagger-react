import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ImageList from './pages/image-list';
import TagList from './pages/tag-list';

// import Home from 'pages/Home';
// import Signup from 'pages/Signup';
//<Route exact path='/signup' component={Signup}></Route>

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={TagList}></Route>
            <Route exact path='/tag-list' component={TagList}></Route>
            <Route exact path='/image-list' component={ImageList}></Route>
        </Switch>
    );
}

export default Main;