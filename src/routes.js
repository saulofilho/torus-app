import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Box from './pages/Box';
import Cone from './pages/Cone';
import Cylinder from './pages/Cylinder';
import Home from './pages/Home';
import Ellipsoid from './pages/Ellipsoid';
import Torus from './pages/Torus';
import ScrollToTop from './components/ScrollToTop';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <ScrollToTop>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/box" exact component={Box} />
        <Route path="/cone" exact component={Cone} />
        <Route path="/cylinder" exact component={Cylinder} />
        <Route path="/ellipsoid" component={Ellipsoid} />
        <Route path="/torus" component={Torus} />
        </ScrollToTop>
      </Switch>
    </BrowserRouter>
  );
}