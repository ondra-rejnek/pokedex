import Pokedex from "./components/Pokedex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Pokedex />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
