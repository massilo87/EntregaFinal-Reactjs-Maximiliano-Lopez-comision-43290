import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";
import Cart from "./Cart";


const CartContainer = () => {

  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  let vaciar = () => {
    Swal.fire({
      title: 'Seguro quieres vaciar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'si, vaciar',
      denyButtonText: `No vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Se eliminaron todos los productos!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Productos conservados!', '', 'info')
      }
    })
  }

  let total = getTotalPrice()

  return <Cart cart={cart} deleteById={deleteById} vaciar={vaciar} total={total} />
};

export default CartContainer;