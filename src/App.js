// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './components/Todo_app';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/todo' element={<TodoApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
