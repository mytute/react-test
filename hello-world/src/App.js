import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div >
      <Greet firstName='Samadhi' lastName='Laksahan' />
      <Welcome firstName='Malani' lastName='Ratnayaka'/>
    </div>
  );
}

export default App;
