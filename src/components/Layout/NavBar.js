import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Member Portal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-g-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"  href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link active"  href="/user/add">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
