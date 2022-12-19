import './App.css';
import Statistics from './components/Statistics';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>This is my world</h2>
      <div class="grid-container">
        <div><Statistics/></div>
        <div>Games</div>
        <div><FAQ/></div>
      </div>
    </div>
  );
}

export default App;
