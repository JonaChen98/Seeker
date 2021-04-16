import LandingPage from './Pages/LandingPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Pages/LoginSignup/Login';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/loginsignup" component={Login}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
