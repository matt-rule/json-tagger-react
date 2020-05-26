import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ImageListPageLayout from './file-list/file-list-page-layout';
import TagList from './tag-list/tag-list';
import FileView from './file-view';
import PageNotFound from './page-not-found';

// import Home from 'pages/Home';
// import Signup from 'pages/Signup';
//<Route exact path='/signup' component={Signup}></Route>

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={TagList} />
            <Route exact path='/tag-list' component={TagList} />
            <Route exact path='/image-list' component={ImageListPageLayout} />
            <Route path="/file/:url?" component={FileView} />
            <Route component={PageNotFound}></Route>
        </Switch>
    );
}

export default Main;