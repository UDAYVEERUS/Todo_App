// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './components/Todo_app';
import NumberGenerator from './components/Generate_number';
import Arrayofobject from './components/ArrayOfObject';
import ShowingText from './components/showingtext';
import Timer from './components/Timer';
import Todo from './components/Todo';
import Fetchapi from './components/Fetchapi';
import ArrayObject from './components/ArrayObject';
import Events from './components/Events';
function App() {
  return (
    <>
      <Router>
        <Routes>

        <Route path='/todo' element={<TodoApp />} />
        <Route path='/' element={<Todo />} />
        <Route path='/number' element={<NumberGenerator />} />
        <Route path='/arrayofobject' element={<Arrayofobject />} />
        <Route path='/showingtext' element={<ShowingText />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/data' element={<Fetchapi />} />
        <Route path='/mydata' element={<ArrayObject />} />
        <Route path='/event' element={<Events />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
