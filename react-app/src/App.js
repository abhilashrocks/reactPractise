import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="Master React" />
    </div>
  );
}

export default App;
