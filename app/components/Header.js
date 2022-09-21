import React from "react"
import HeaderLoggedOut from "./HeaderLoggedOut"
import { Link } from "react-router-dom"
import { useState } from "react"
import HeaderLoggedIn from "./HeaderLoggedIn"
function Header() {
  const [LoggedIn, setLoggedIn] = useState()
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            {" "}
            ComplexApp{" "}
          </Link>
        </h4>
        {LoggedIn ? <HeaderLoggedIn setLoggedIn={setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={setLoggedIn} />}
      </div>
    </header>
  )
}
export default Header
