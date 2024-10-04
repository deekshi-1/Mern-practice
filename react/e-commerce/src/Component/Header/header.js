import "./header.css";

const Header = () => (
  <nav>
    <div>
      <span className="logo">EKart</span>
    </div>
    <div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li className="cart">Cart <span>0</span></li>
      </ul>
    </div>
  </nav>
);

export default Header;
