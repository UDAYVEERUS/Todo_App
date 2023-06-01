// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './components/Todo_app';
import NumberGenerator from './components/Generate_number';
import Arrayofobject from './components/ArrayOfObject';
import ShowingText from './components/showingtext';
import Timer from './components/Timer';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/todo' element={<TodoApp />} />
        <Route path='/number' element={<NumberGenerator />} />
        <Route path='/arrayofobject' element={<Arrayofobject />} />
        <Route path='/showingtext' element={<ShowingText />} />
        <Route path='/timer' element={<Timer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
