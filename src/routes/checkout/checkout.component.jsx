import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../../components/cart-item/cart-item.component";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => {
        const { id, name, quantity, price } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={()=> removeItemFromCart(item)} >DEC</span>
            <br />
            <span onClick={() => addItemToCart(item)}>INC</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
