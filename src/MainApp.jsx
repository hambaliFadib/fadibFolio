import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import QualityThinkingPage from './pages/QualityThinkingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function MainApp() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/quality-thinking" component={QualityThinkingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Layout>
  );
}

export default MainApp;
