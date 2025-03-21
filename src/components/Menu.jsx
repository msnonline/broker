import bank from "../assets/bank.png";
import transfer from "../assets/transfer.png";
import card from "../assets/card.png";
import more from "../assets/more.png";

import { Link } from "react-router";

const Menu = () => {
  return (
    <footer className={window.location.href.includes("login")? "none" : ""}>
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
      <Link to="/more">
        <div className="bottom-btn">
          <img className="btm-icon" src={more} alt="" srcSet="" />
          <aside>More</aside>
        </div>
      </Link>
    </footer>
  );
};

export default Menu;
