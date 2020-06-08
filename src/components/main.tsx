import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FileListPageLayout from './file-list/file-list-page-layout';
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
            <Route exact path='/file-list' component={FileListPageLayout} />
            <Route path="/file/:url?" component={FileView} />
            <Route component={PageNotFound} />
        </Switch>
    );
}

export default Main;