// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Router,Switch,Route  } from 'react-router-dom';
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
function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path='/todo' exact component={TodoApp} />
          <Route path='/' exact component={Todo} />
          {/* <Route exact path='/number' element={<NumberGenerator />} />
        <Route exact path='/arrayofobject' element={<Arrayofobject />} />
        <Route exact path='/showingtext' element={<ShowingText />} />
        <Route exact path='/timer' element={<Timer />} />
        <Route exact path='/data' element={<Fetchapi />} />
        <Route exact path='/mydata' element={<ArrayObject />} />
        <Route exact path='/event' element={<Events />} />
        <Route exact path='/time' element={<DIgitalClock />} />
        <Route exact path='/count' element={<IncreDecre />} /> */}
          <Route component={Error} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
