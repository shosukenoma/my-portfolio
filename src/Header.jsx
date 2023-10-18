import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header debug-border">
      {/* <h1 className="logo"> SN &#47; </h1> */}
      <h1 className="logo"> &#60; SN &#47; &#62; </h1>
      {/* <h1 className="logo"> &#60; ShoNoma &#47; &#62; </h1> */}
      <ul className="links">
        <li className="github">
          <a className="github-link" href="https://github.com/shosukenoma" target="_blank">
            <i class="devicon-github-original"></i>
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header