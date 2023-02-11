import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsNewspaper } from 'react-icons/bs';


function Search(){
  let x =  document.getElementById("search").value;
  let url =`https://www.google.com/search?q=${x}`;
  window.open(url,'_blank')
}

export default function Navbar(props) {
  return (
    <div>

      <nav className={`navbar navbar-expand-lg bg-light navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand my-2" href="#"><BsNewspaper/> My News</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/Business" className="nav-link">Business</NavLink></li>
              <li className="nav-item"><NavLink to="/Entertainment" className="nav-link">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink to="/Health" className="nav-link">Health</NavLink></li>
              <li className="nav-item"><NavLink to="/Sports" className="nav-link">Sports</NavLink></li>
              <li className="nav-item"><NavLink to="/Science" className="nav-link">Science</NavLink></li>
              <li className="nav-item"><NavLink to="/Technology" className="nav-link">Technology</NavLink></li>
            </ul>
            <div className={`form-check form-switch me-5 ms-5 mt-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="form">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
              <label className="form-check-label" id="name" htmlFor="flexSwitchCheckChecked">{`${props.mode === 'dark' ? 'Enable LightMode' : 'Enable DarkMode'}`}</label>
            </div> 
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" id='search' placeholder="Search" autoComplete='off'  aria-label="Search" />
              <button className="btn btn-outline-success" onClick={Search}  type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}
