import React, { useState } from "react";

const header = () => {
  const [mode, setMode] = useState("light");
  const [logo, setLogo] = useState("./src/assets/images/silicon-logo.svg");

  const toogleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setLogo("./src/assets/images/silicon-logo-dark.svg");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setMode("light");
      setLogo("./src/assets/images/silicon-logo.svg");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <div>
      <header>
        <div className="container">
          <a href="index.html">
            <img src={logo} alt="Siliocn Logotype" />
          </a>
          <nav className="navbar">
            <a className="nav-link" href="#">
              Features
            </a>
          </nav>

          <div className="toogle-switch">
            <span className="toogle-label">Dark mode</span>
            {/* Toogle switch from w3school */}
            <label className="switch">
              <input type="checkbox" onClick={toogleMode} />
              <span className="slider round"></span>
            </label>
          </div>

          <a id="sign-in" className="btn btn-primary" href="#">
            <i className="fa-thin fa-user"></i>
            <span>Sign in / up</span>
          </a>
          <button className="btn-mobile">
            <i className="fa-sharp fa-thin fa-bars"></i>
          </button>
        </div>
      </header>
    </div>
  );
};

export default header;
