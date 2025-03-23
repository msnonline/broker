import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="major-container">
      <h1 className="section-title">
        Withdraw to your chosen Bank account or Card
      </h1>
      <div className="card-div">
        <button
          className="send"
          onClick={() => {
            navigate("/payfee");
          }}
        >
          <span className="pl">+</span>Add Bank/Card
        </button>
      </div>
    </div>
  );
};

export default Cards;
