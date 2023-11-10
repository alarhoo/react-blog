import React from 'react';
import Header from './Header';
import { HashRouter, Switch, Route } from 'react-router-dom';
import GridPosts from './GridPosts';
import PostDetailed from './PostDetailed';
import About from './About';
import Account from './Account';
import Login from './Login';
import Register from './Register';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';
import NotFound from './NotFound';

const AppRoot = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" component={GridPosts} exact />
          <Route path="/about" component={About} />
          <Route path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/new_post" component={NewPost} />
          <Route path="/post/:id" exact>
            <PostDetailed />
          </Route>
          <Route path="/update/post/:id" exact>
            <UpdatePost />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default AppRoot;
