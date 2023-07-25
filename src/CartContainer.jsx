import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

export default function CartContainer() {
  const { cart, clear, totalCost } = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <div className="carts">
        <h4>your bag</h4>
        <p className="message">is currently empty</p>
      </div>
    );
  }

  return (
    <section className="carts">
      <header>
        <h4>your bag</h4>
      </header>
      <div className="cart-container">
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;

          return <CartItem key={id} {...item} />;
        })}
      </div>
      <footer className="carts-footer">
        <hr />
        <div className="total">
          <p className="text">total</p>
          <p className="amount">${totalCost.toFixed(2)}</p>
        </div>
        <button onClick={clear} className="btn btn-hipster">
          clear cart
        </button>
      </footer>
    </section>
  );
}
