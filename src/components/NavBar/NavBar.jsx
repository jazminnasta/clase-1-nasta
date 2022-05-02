import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
		  <div className="container-fluid">
		    <a className="navbar-brand" href="/">AstroShop</a>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarShop" aria-controls="navbarShop" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarShop">
		      <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
		        <li className="nav-item">
		        	<NavLink to={`/`} activeclassname="active">Home</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink to={`/category/fuego`} activeclassname="active">Fuego</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink to={`/category/tierra`} activeclassname="active">Tierra</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink to={`/category/aire`} activeclassname="active">Aire</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink to={`/category/agua`} activeclassname="active">Agua</NavLink>
		        </li>
		      </ul>
		    </div>
		    <div>
		    <CartWidget />
		    </div>
		  </div>
		</nav>
	);
}

export default NavBar;