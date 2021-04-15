import './App.css';
import LandingPage from './Landing_Page/LandingPage'
import LandingAbout from './Landing_Page/LandingAboutUs'
// import App2 from './Landing_Page/Quotes'
import Images from './Landing_Page/Images'

function App() {
  return (
    <>
      <LandingPage className="page_top" />
      <LandingAbout />
      <Images />
      {/* <App2 /> */}
    </>
  );
}

export default App;
