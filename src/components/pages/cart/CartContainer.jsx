import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";


const CartContainer = () => {

  const { cart, clearCart, deleteById } = useContext(CartContext);

  return (
    <div>
      <h1>Estos son los articulos que cargaste en el carrito</h1>

      {
        cart.map((elemento) => {

          return (
            <div key={elemento.id}>
              {/* <img src={elemento.img} alt="elemento_img" /> */}
              <h3>Articulo:{elemento.title}</h3>
              <h3>Precio:${elemento.price}</h3>
              <h3>Cantidad:{elemento.quantity}</h3>
              <Button onClick={() => deleteById(elemento.id)} variant="contained" color="error">Eliminar</Button>
            </div>
          );
        })
      }

      <Button onClick={clearCart} variant="contained" color="secondary">Vaciar carrito</Button>
    </div>
  );
};

export default CartContainer;