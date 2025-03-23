import bank from "../assets/bank.png";
import transfer from "../assets/transfer.png";
import card from "../assets/card.png";
import more from "../assets/logout.png";

import { Link } from "react-router";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Menu = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 300000);
  }, []);
  return (
    <footer className={window.location.href.includes("login") ? "none" : ""}>
      <Link to="/">
        <div className="bottom-btn">
          <img className="btm-icon" src={bank} alt="" srcSet="" />
          <aside>Accounts</aside>
        </div>
      </Link>
      <Link to="/transfer">
        <div className="bottom-btn">
          <img className="btm-icon" src={transfer} alt="" srcSet="" />
          <aside>Withdraw</aside>
        </div>
      </Link>
      <Link to="/cards">
        <div className="bottom-btn">
          <img className="btm-icon" src={card} alt="" srcSet="" />
          <aside>Cards/Banks</aside>
        </div>
      </Link>
      <div className="bottom-btn">
        <img
          className="btm-icon"
          src={more}
          onClick={handleLogout}
          alt=""
          srcSet=""
        />
        <aside>Logout</aside>
      </div>
    </footer>
  );
};

export default Menu;
