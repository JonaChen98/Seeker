import './App.css';
import LandingPage from './Landing_Page/LandingPage'
import LandingAbout from './Landing_Page/LandingAboutUs'
import Footer from './Landing_Page/Footer'
import Using from './Landing_Page/Using'

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <>
      <LandingPage />
      <LandingAbout />
      <Using />
      <Footer />
    </>
  );
}

export default App;
