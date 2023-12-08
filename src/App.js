import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListTask from './components/ListTask';

function App() {
  const username = "Sridhar";
  return (
    <div className="App">
      <Header/>
      <div>
      <h1 className='head'>{username}</h1>
      </div>
      <ListTask/>
    </div>
  );
}

export default App;
