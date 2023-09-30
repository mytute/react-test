import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <div>
      <UserProvider  value="Samadhi">
        <ComponentC  />
      </UserProvider>
    </div>
  );
}

export default App;
