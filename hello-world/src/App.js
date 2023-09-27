import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
function App() {
  return (
    <div>
      <HoverCounter age={25}/>
      <ClickCounter age={26}/>
    </div>
  );
}

export default App;
