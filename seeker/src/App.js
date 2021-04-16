import './App.css';
import LandingPage from './Landing_Page/LandingPage'
import LandingAbout from './Landing_Page/LandingAboutUs'
import Footer from './Landing_Page/Footer'
import Using from './Landing_Page/Using'
// import App2 from './Landing_Page/Quotes'

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <>
      <LandingPage />
      {/* <Fade left cascade><LandingAbout /></Fade>
      <Zoom><Using /></Zoom> */}
      <LandingAbout />
      <Using />
      <Footer />
      {/* <App2 /> */}
    </>
  );
}

export default App;
