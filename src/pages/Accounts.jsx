import Board from "../components/Board";
import Transactions from "../components/Transactions";

const Accounts = () => {
  return (
    <div className="accounts-parent">
      <Board
        accType="INVESTMENT ACCOUNT"
        detail="8375928513943"
        name={"DAVE STOTLAR"}
        amount={"13,009,417.37"}
        av={"13,009,417.37"}
      />
      <Transactions />
    </div>
  );
};

export default Accounts;
