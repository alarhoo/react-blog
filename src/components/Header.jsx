import { Link, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand nav-item nav-link" to="/">
        React-Blog
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="navbar-nav mr-auto">
          <NavLink className="nav-item nav-link" to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about" activeClassName="active">
            About
          </NavLink>
        </div>
        {/* Navbar Right Side */}
        <div className="navbar-nav">
          {/* {% if current_user.is_authenticated %} */}
          <Link className="nav-item nav-link" to="/new_post">
            New Post
          </Link>
          <Link className="nav-item nav-link" to="/account">
            Account
          </Link>
          <Link className="nav-item nav-link" to="/logout">
            Logout
          </Link>
          {/* {% else %} */}
          <Link className="nav-item nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-item nav-link" to="/register">
            Register
          </Link>
          {/* {% endif %} */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
