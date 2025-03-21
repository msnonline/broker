import logo from "../assets/logo.jpeg";

const Banner = () => {
  return (
    <nav className={window.location.href.includes("login") ? "nav" : "in-nav"}>
      <button id="menuButton">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
          />
        </svg>
      </button>
      <div className="lg">
        <img
          className={
            window.location.href.includes("login") ? "logo" : "logo in-logo"
          }
          src={logo}
        />
      </div>
      <div className="menu">
        <button className="close">
          <img src="assets/img/cancel.svg" alt="" srcSet="" />
        </button>
        <h1>Menu</h1>
        <ul>
          <li>Dashboard</li>
          <li>Pay Bills</li>
          <li>Transfer funds</li>
          <li>Deposit</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Log out</li>
        </ul>
      </div>
    </nav>
  );
};

export default Banner;
