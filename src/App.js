import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const username = "sridhar";
  return (
    <div className="App">
      <Header/>
      <div>
      <h1 className='head'>{username}</h1>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
