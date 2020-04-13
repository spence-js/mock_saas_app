import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Components/HomePage/HomePage';
import SolutionsPage from './Components/SolutionsPage/SolutionsPage';
import PartnersPage from './Components/PartnersPage/PartnersPage';
import OurStoryPage from './Components/OurStoryPage/OurStoryPage';
import DemoPage from './Components/DemoPage/DemoPage';

export default (
  <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route path='/Solutions' component={ SolutionsPage } />
    <Route path='/Partners' component={ PartnersPage } />
    <Route path='/OurStory' component={ OurStoryPage } />
    <Route path='/Demo' component={ DemoPage } />
  </Switch>
)