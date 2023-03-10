import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./components/pages/LandingPage";
import SkinTrivia from "./components/pages/SkinTrivia";
import InputSkinTrivia from "./components/pages/InputSkinTrivia";
import Diagnostic from "./components/pages/Diagnostic";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Navbar/>
        <Routes>
          <Route path="/home" element={<LandingPage/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/skin-trivia" element={<SkinTrivia/>}/>
          <Route path="/skin-trivia/input-informatons" element={<InputSkinTrivia/>}/>
          <Route path="/Diagnostic" element={<Diagnostic/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
