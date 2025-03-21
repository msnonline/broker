import "../App.css";
import { useState } from "react";

const Pin = () => {
  const [pin, setPin] = useState("");

  const handleInputChange = (e) => {
    // Remove non-numeric characters and limit input to 4 digits
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 4) {
      setPin(value);
    }
  };

  return (
    <div className="major-container">
      <div className="pin">
        <h1 className="pin-head">Enter Pin</h1>
        <br />
        <input
          type="text"
          className="pin-code"
          placeholder="0000"
          value={pin}
          onChange={handleInputChange}
        />
        <button className="send">Authorize Payment</button>
      </div>
    </div>
  );
};

export default Pin;
