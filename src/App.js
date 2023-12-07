import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./components/pages/LandingPage";
import SkinTrivia from "./components/pages/SkinTrivia";
import InputSkinTrivia from "./components/pages/InputSkinTrivia";
import Diagnostic from "./components/pages/Diagnostic";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import ProfilePage from "./components/pages/ProfilePage";
import InputPenyakitPage from "./components/pages/InputPenyakitPage";
import HistoryPage from "./components/pages/HistoryPage";
import NotFound from "./components/pages/NotFound";
import UserList from "./components/pages/UserList";
import { UserContextProvider } from "./context/userContext";

import { Toaster } from "react-hot-toast";

import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <UserContextProvider>
      <HashRouter basename="/">
        <Navbar/>
        <Toaster position="top-right" toastOptions={{duration: 2000}}/>
        <Routes>
          <Route path="/home" element={<LandingPage/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/skin-trivia" element={<SkinTrivia/>}/>
          <Route path="/skin-trivia/input-informations" element={<InputSkinTrivia/>}/>
          <Route path="/diagnostic" element={<Diagnostic/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/inputpenyakit" element={<InputPenyakitPage/>}/>
          <Route path="/History" element={<HistoryPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </UserContextProvider>
    </>
  );
}

export default App;
