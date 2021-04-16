import './App.css';
import LandingPage from './Landing_Page/LandingPage'
import LandingAbout from './Landing_Page/LandingAboutUs'
import Footer from './Landing_Page/Footer'
// import App2 from './Landing_Page/Quotes'

function App() {
  return (
    <>
      <LandingPage className="page_top" />
      <LandingAbout />
      <Footer />
      {/* <App2 /> */}
    </>
  );
}

export default App;
