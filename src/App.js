import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './frontend/Routes/Homepage/Homepage';
import BlogsForm from './frontend/Routes/Blogs/BlogsForm/BlogsForm';
import Blog from './frontend/Routes/Blogs/Blog/Blog';
import Blogs from './frontend/Routes/Blogs/Blogs/Blogs';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/blogs/create' component={BlogsForm} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/blogs/:title' component={Blog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;