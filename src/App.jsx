import {Route, Routes} from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation/Navigation"
import {Suspense} from "react"
import Loader from "./components/Loader/Loader"
import HomePage from "./pages/HomePage/HomePage"
import AboutMe from "./pages/AboutMe/AboutMe"

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/works" element={<HomePage />} />
          <Route path="/contacts" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  )
}
