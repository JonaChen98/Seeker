import LandingPage from './Pages/Landing/LandingPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './Pages/LoginSignup/LoginForm';
import SignUpForm from './Pages/LoginSignup/SignUpForm'
import LoginSignup from './Pages/LoginSignup/index'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginSignup} />
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignUpForm}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
