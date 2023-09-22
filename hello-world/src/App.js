import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div >
      <Greet name='Samadhi'/>
      <Greet name='Pasindu'/>
      <Greet name='Saman'> 
         <label>show me</label>
         <button>click</button>
      </Greet>
    </div>
  );
}

export default App;
