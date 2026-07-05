import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="nav-item">
        Home
      </Link>

      <Link to="/products" className="nav-item">
        Products
      </Link>

      <Link to="/cart" className="nav-item">
        Cart
      </Link>

    </nav>
  );
}

export default Navbar;