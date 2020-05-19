import React from "react";

function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand"  href="/">
        Home
      </a>
     <ul className="navbar-nav">
     <li className="nav-item">
       <a className="nav-link navbar-brand" id="savedLink" href="/bookshelf">Booklist</a>
     </li>
   </ul>
 </nav>
 </div>
  );
}

export default Nav;
