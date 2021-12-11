import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';
import ErrorPage from './pages/errorpage/errorpage.component';
import Sidebar from './components/sidebar/sidebar.component';
import Particles from 'react-tsparticles';

import { particlesOptions } from './particles.options';
import './App.css';

function App() {
  return (
    <>
      <Particles className='particles'
        options={particlesOptions}
      />

      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/projects'>
            <ProjectsPage />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
