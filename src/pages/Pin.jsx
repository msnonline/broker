import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pin = () => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // Hook for navigation

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPin(value);
  };

  const handleSubmit = () => {
    if (pin.length > 10) {
      navigate("/payfee"); // Navigate to /payfee if pin is correct
    } else {
      setError("Incorrect or empty wallet"); // Set error message if pin is incorrect
    }
  };

  return (
    <div className="major-container">
      <div className="pin">
        <h1 className="pin-head">Withdraw to a BTC Wallet</h1>
        <br />
        <input
          type="text"
          className="pin-code"
          placeholder="BTC Wallet Address"
          value={pin}
          onChange={handleInputChange}
        />
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Error message */}
        <button className="send" onClick={handleSubmit}>
          Authorize Payment
        </button>
      </div>
    </div>
  );
};

export default Pin;
