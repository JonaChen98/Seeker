import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppRouter from './router'

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
