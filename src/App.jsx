import {Route, Routes} from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation/Navigation"
import {Suspense} from "react"
import Loader from "./components/Loader/Loader"
import HomePage from "./pages/HomePage/HomePage"
import AboutMe from "./pages/AboutMe/AboutMe"
import MyResume from "./pages/MyResume/MyResume"
import Works from "./pages/Works/Works"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

export default function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/works" element={<Works />} />
          <Route path="/resume" element={<MyResume />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
