import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoApp from './components/Todo_app';
import NumberGenerator from './components/Generate_number';
import Arrayofobject from './components/ArrayOfObject';
import ShowingText from './components/showingtext';
import Timer from './components/Timer';
import Todo from './components/Todo';
import Fetchapi from './components/Fetchapi';
import ArrayObject from './components/ArrayObject';
import Events from './components/Events';
import DIgitalClock from './components/DIgitalClock';
import IncreDecre from './components/IncreDecre';
import Error from './components/Error';
import Fetching from './components/Fetching';
import Props from './components/Props';
import Form from './components/Form';
function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path='/todo' exact component={TodoApp} />
          <Route path='/' exact component={Todo} />
          <Route exact path='/number' component={NumberGenerator} />
          <Route exact path='/arrayofobject' component={Arrayofobject} />
          <Route exact path='/showingtext' component={ShowingText} />
          <Route exact path='/timer' component={Timer} />
          <Route exact path='/data' component={Fetchapi} />
          <Route exact path='/mydata' component={ArrayObject} />
          <Route exact path='/event' component={Events} />
          <Route exact path='/time' component={DIgitalClock} />
          <Route exact path='/count' component={IncreDecre} />
          <Route exact path="/fetchjson" component={Fetching} />
          <Route exact path="/props" component={Props} />
          <Route exact path="/form" component={Form} />
          <Route component={Error} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
