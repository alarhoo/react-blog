import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand nav-item nav-link" to="/">
        React-Blog
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="navbar-nav mr-auto">
          <NavLink exact className="nav-item nav-link" to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        {/* Navbar Right Side */}
        <div className="navbar-nav">
          {/* {% if current_user.is_authenticated %} */}
          <NavLink className="nav-item nav-link" to="/new_post" activeClassName="active">
            New Post
          </NavLink>
          <NavLink className="nav-item nav-link" to="/account" activeClassName="active">
            Account
          </NavLink>
          <NavLink className="nav-item nav-link" to="/logout" activeClassName="active">
            Logout
          </NavLink>
          {/* {% else %} */}
          <NavLink className="nav-item nav-link" to="/login" activeClassName="active">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register" activeClassName="active">
            Register
          </NavLink>
          {/* {% endif %} */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
