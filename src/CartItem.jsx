import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function CartItem({ id, title, price, img, amount }) {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} className="img" />
      <div className="body">
        <h5>{title}</h5>
        <p className="price">${price}</p>
        <button onClick={() => remove(id)} className="remove-btn">
          remove
        </button>
      </div>
      <div className="nav">
        <FaChevronUp onClick={() => increase(id)} className="up" />
        <span className="count">{amount}</span>
        <FaChevronDown onClick={() => decrease(id)} className="down" />
      </div>
    </article>
  );
}
