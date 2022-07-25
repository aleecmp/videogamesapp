import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import VgameDetails from "./components/VgameDetails/VgameDetails";
import CreateVgame from "./components/CreateVgame/CreateVgame";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/videogame/:id" component={VgameDetails} />
        <Route exact path="/create" component={CreateVgame} />
      </div>
    </BrowserRouter>
  );
}

export default App;
