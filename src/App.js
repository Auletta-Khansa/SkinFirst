import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./components/pages/LandingPage";
import SkinTrivia from "./components/pages/SkinTrivia";
import InputSkinTrivia from "./components/pages/InputSkinTrivia";
import Diagnostic from "./components/pages/Diagnostic";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import ProfilePage from "./components/pages/ProfilePage";
import NotFound from "./components/pages/NotFound";

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
          <Route path="/diagnostic" element={<Diagnostic/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
