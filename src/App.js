import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./components/pages/LandingPage";
import SkinTrivia from "./components/pages/SkinTrivia";
import InputSkinTrivia from "./components/pages/InputSkinTrivia";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar/>
        </>
        <Routes>
          <Route path="/home" element={<LandingPage/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/skin-trivia" element={<SkinTrivia/>}/>
          <Route path="/input-trivia" element={<InputSkinTrivia/>}/>
        </Routes>
      </BrowserRouter>
      <>
        <Footer/>
      </>
    </>
  );
}

export default App;
