
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";

import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <NavBar />
    <Header />
    <About />
    
    <Gallery />
    <Contacts />
    <Footer />
    
    </>
  );
}

export default App;
