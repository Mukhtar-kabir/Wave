import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/Logo/logo.png" alt="LOGO" />
        <h1>
          Buy Sell <br />
          Site
        </h1>
      </div>

      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>

      <div className="cart">
        <p>Cart</p>
        <select name="" id="">
          <option value="1">My Account</option>
          <option value="2">Log Out</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
