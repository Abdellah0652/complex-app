import React from "react"
import { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// My Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import Home from "./components/Home"
import HomeGuest from "./components/HomeGuest"
import HeaderLoggedIn from "./components/HeaderLoggedIn"
import CreatePost from "./components/CreatePost"
import Axios from "axios"
Axios.defaults.baseURL = "http://localhost:8080"
function Main() {
  const [LoggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")))

  return (
    <BrowserRouter>
      <Header LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={LoggedIn ? <Home /> : <HomeGuest />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
