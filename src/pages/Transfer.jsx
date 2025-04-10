import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation to the PIN page
import Board from "../components/Board";

const Transfer = () => {
  const [amount, setAmount] = useState(""); // State for the input field value
  const navigate = useNavigate(); // For routing

  const handleProceed = () => {
    // Remove commas and check if the amount is greater than 0
    const numericAmount = parseFloat(amount.replace(/,/g, ""));
    if (numericAmount > 0 && numericAmount <= 13009417.37) {
      navigate("/pin"); // Route to the PIN page
    } else {
      alert("Please enter an amount greater than 0."); // Validation message
    }
  };

  const handleInputChange = (e) => {
    // Remove non-numeric characters except for the decimal point
    const rawValue = e.target.value.replace(/[^0-9.]/g, "");

    // Format the number with commas for thousands
    const parts = rawValue.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas to the integer part

    setAmount(parts.join(".")); // Join the integer and fractional parts
  };

  return (
    <div className="major-container">
      <Board
        accType={"INVESTMENT ACCOUNT"}
        detail={"8375928513943"}
        name={"DAVE STOTLAR"}
        amount={"$13,009,417.37"}
        av={"13,009,417.37"}
      />
      {/* <Board accType={"TO"} detail={"8375928513943"} name={"DAVE STOTLAR"} /> */}

      <div className="form-group acc-details">
        <h1>AMOUNT</h1>
        <div className="field-group">
          <h1 className="trans">$</h1>
          <input
            className="amount-field"
            type="text"
            value={amount}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button className="send" id="proceed" onClick={handleProceed}>
        WITHDRAW
      </button>
      <div className="details">
        <h2>Sending money</h2>
        <p>There's an issue with your account, please contact us.</p>
      </div>
    </div>
  );
};

export default Transfer;
