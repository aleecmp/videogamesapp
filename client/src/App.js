import "./App.css";
import { Route, RouterBrowser } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <RouterBrowser>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
      </div>
    </RouterBrowser>
  );
}

export default App;
