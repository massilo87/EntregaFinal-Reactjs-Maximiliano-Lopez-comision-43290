import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const CartContainer = () => {

  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice()

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
              <Button onClick={() => deleteById(elemento.id)} variant="outlined" startIcon={<DeleteIcon />} color="error" size="small">Eliminar</Button>
            </div>
          );
        })
      }

      <Button onClick={clearCart} variant="contained" color="secondary" size="small">Vaciar carrito</Button>
      <h3>El total de tu compra es: ${total}</h3>
      <Button variant="contained" color="success">Terminar compra</Button>
    </div>
  );
};

export default CartContainer;