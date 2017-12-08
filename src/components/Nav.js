import React from 'react';

const Nav = () => ( 
    <header className="header">
    <nav className="navbar navbar-expand-lg fixed-top"><a href="/" className="navbar-brand">Woulo</a>
      <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span></span><span></span><span></span></button>
      <div id="navbarSupportedContent" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto align-items-start align-items-lg-center">
          <li className="nav-item"><a href="#browser" className="nav-link link-scroll">Best Woulos</a></li>
        </ul>
        <div className="navbar-text">   
        </div>
      </div>
    </nav>
  </header>
);
export default Nav;