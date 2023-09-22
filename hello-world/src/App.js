import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div >
      <Greet name='Samadhi'/>
      <Greet name='Pasindu'/>
      <Greet name='Saman'> 
         <label>show me</label>
         <button>click</button>
      </Greet>
      <Welcome name='Class Props'/>
    </div>
  );
}

export default App;
