import ToDoContainer from './myCode/ToDoContainer';
import CreateToDo from './myCode/CreateToDo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateToDo />
        <ToDoContainer />
      </header>
    </div>
  );
}

export default App;
