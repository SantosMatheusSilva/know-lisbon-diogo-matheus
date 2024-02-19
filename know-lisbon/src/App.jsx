import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import ToKnowTheCityDetailsPage from './pages/KnowTheCityDetailsPage';
import ToHaveFunDetailsPage from './pages/ToHaveFunDetailsPage';
import ToMoveYourBodyDetailsPage from './pages/ToMoveYourBodyDetailsPage'

function App() {


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places-to-know" element={<ToKnowTheCityDetailsPage />} />
        <Route path="/places-to-have" element={<ToHaveFunDetailsPage />} />
        <Route path="/places-to-move" element={<ToMoveYourBodyDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
