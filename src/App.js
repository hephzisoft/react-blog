import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Header title="React Js Blog"/>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/about" component={About}>
          <About />
        </Route>

        <Route path="*" component={Missing}>
          <Missing />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
