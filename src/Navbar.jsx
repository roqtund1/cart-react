import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Navbar() {
  const { totalAmount } = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <h4 className="nav-logo">useReducer</h4>
        <div className="cart">
          <FaCartPlus className="icon" />
          <p className="text">{totalAmount}</p>
        </div>
      </div>
    </nav>
  );
}
