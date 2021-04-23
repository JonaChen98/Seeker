import LandingPage from './Pages/Landing/LandingPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginSignup from './Pages/LoginSignup/index'
import UserProfile from './Pages/UserProfile/index'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/a" component={LoginSignup} />
          <Route exact path="/p" component={UserProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
