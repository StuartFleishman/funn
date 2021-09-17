import logo from './logo.svg';
import './App.css';
import {firebaseApp} from './firebase'
function App() {
  console.log(firebaseApp)
  return (
    <div className="App">
      <div className="container bg-pink-700 h-8 mx-auto">
        <h1>Hellow World</h1>
      </div>
    </div>
  );
}

export default App;
