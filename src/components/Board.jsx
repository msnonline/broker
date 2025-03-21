const Board = ({ accType, detail, name, amount, av }) => {
  return (
    <div
      className={
        window.location.pathname.includes("transfer")
          ? "acc-container fade"
          : "acc-container"
      }
    >
      <div className="acc-box acc">
        <div
          className={
            window.location.pathname.includes("transfer")
              ? "a-type no-border"
              : "a-type"
          }
        >
          <h1>{accType}</h1>
        </div>
        <div className="acc-details">
          <h1 className="account-number">{detail}</h1>
          <div className="main-details">
            <h1 className="account-name">{name}</h1>
            <div className="numbers">
              <h1 className="amount">{amount}</h1>
              <sub
                className={
                  window.location.pathname.includes("transfer") ? " none" : ""
                }
              >
                USD
              </sub>
            </div>
          </div>
          <h2
            className={
              window.location.pathname.includes("transfer")
                ? "available none"
                : "available"
            }
          >
            Available balance: <span className="av"> {av}</span>
          </h2>
        </div>
        {/* <div className="history">
          <h1 className="hd">Account history</h1>
          <div className="hcon">
            <div className="hs">
              <div className="transaction-block">
                <aside>
                  <h1>Profit</h1>
                  <h3>May_93847hu</h3>
                </aside>
                <aside>+$7,264.33</aside>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Board;
